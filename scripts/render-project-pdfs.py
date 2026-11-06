"""Build the read-only page images used by PDF evidence in the portfolio.

Requires Python, Pillow, pypdf, and Poppler's pdftoppm on PATH.
Run from the repository root. Existing previews are reused when the source hash
matches. --reuse-existing adopts previously rendered pages on first migration.
"""

import argparse
import hashlib
import io
import json
import shutil
import subprocess
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / 'src/data/pdf-previews.json'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--reuse-existing', action='store_true')
    args = parser.parse_args()
    renderer = shutil.which('pdftoppm')
    if not renderer:
        raise RuntimeError('Install Poppler and put pdftoppm on PATH.')
    previous = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    manifest = {}
    for source in sorted((ROOT / 'public/projects').rglob('*.pdf')):
        url = '/' + source.relative_to(ROOT / 'public').as_posix()
        count = len(PdfReader(source).pages)
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        # Preserve the already published URL of the first Omah document.
        folder = 'content-planning-pages' if source.stem == 'content-planning-strategy' else source.stem + '-pages'
        output = source.parent / folder
        base = '/' + output.relative_to(ROOT / 'public').as_posix()
        manifest[url] = {'basePath': base, 'pageCount': count, 'sourceSha256': digest}
        complete = all((output / f'page-{n:02}.webp').is_file() for n in range(1, count + 1))
        if complete and (previous.get(url, {}).get('sourceSha256') == digest or args.reuse_existing):
            print(f'Reused {source.name}: {count} pages', flush=True)
            continue
        output.mkdir(parents=True, exist_ok=True)

        def render(number):
            png = subprocess.run([renderer, '-f', str(number), '-l', str(number),
                                  '-singlefile', '-scale-to', '1800', '-png', str(source)],
                                 check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout
            with Image.open(io.BytesIO(png)) as image:
                image.save(output / f'page-{number:02}.webp', 'WEBP', quality=88, method=4)

        with ThreadPoolExecutor(max_workers=2) as pool:
            for done, _ in enumerate(pool.map(render, range(1, count + 1)), 1):
                if done % 10 == 0 or done == count:
                    print(f'{source.name}: {done}/{count} pages', flush=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
    print(f'Complete: {len(manifest)} documents, {sum(d["pageCount"] for d in manifest.values())} pages.', flush=True)


if __name__ == '__main__':
    main()
