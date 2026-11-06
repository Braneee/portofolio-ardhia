"""Export saved Excel values and basic layout for the portfolio's read-only viewer.

Does not modify/recalculate the workbook or publish the original XLSX.
Usage: python scripts/export-workbook-preview.py INPUT.xlsx OUTPUT.json
"""

import json
import re
import sys
from datetime import date, datetime, time
from pathlib import Path

from openpyxl import load_workbook
from openpyxl.utils import get_column_letter


def display(value, number_format):
    if value is None:
        return ""
    if isinstance(value, (datetime, date)):
        return value.strftime("%d %b %Y")
    if isinstance(value, time):
        return value.strftime("%H:%M")
    if isinstance(value, bool):
        return "TRUE" if value else "FALSE"
    if isinstance(value, (int, float)):
        fmt = re.sub(r'"[^"]*"|\\.|\[[^\]]*\]', '', number_format).split(';')[0]
        decimal = re.search(r'\.([0#]+)', fmt)
        precision = len(decimal.group(1)) if decimal else 0
        if '%' in fmt:
            return f"{value * 100:.{precision}f}%"
        if fmt == 'General':
            return str(value) if isinstance(value, int) else f"{value:.12g}"
        if '0' in fmt or '#' in fmt:
            return format(value, f",.{precision}f" if ',' in fmt else f".{precision}f")
    return str(value)


def color(source):
    if source is not None and source.type == 'rgb':
        return '#' + source.rgb[-6:]
    return None


def export(input_path, output_path):
    book = load_workbook(input_path, data_only=True)
    sheets = []
    for sheet in book:
        if sheet.sheet_state != 'visible':
            continue
        populated = [c for row in sheet for c in row if c.value is not None]
        if not populated:
            continue
        max_row = max(c.row for c in populated)
        max_col = max(c.column for c in populated)
        merges = list(sheet.merged_cells.ranges)
        for merge in merges:
            if merge.min_row <= max_row and merge.min_col <= max_col:
                max_row = max(max_row, merge.max_row)
                max_col = max(max_col, merge.max_col)
        columns = []
        for col in range(1, max_col + 1):
            dimension = next((d for d in sheet.column_dimensions.values()
                              if d.min <= col <= d.max), None)
            width = dimension.width if dimension else sheet.sheet_format.defaultColWidth or 13
            columns.append({'label': get_column_letter(col),
                            'width': max(40, min(420, round(width * 7 + 5)))})
        covered = set()
        anchors = {}
        for merge in merges:
            anchors[(merge.min_row, merge.min_col)] = merge
            for row in range(merge.min_row, merge.max_row + 1):
                for col in range(merge.min_col, merge.max_col + 1):
                    if (row, col) != (merge.min_row, merge.min_col):
                        covered.add((row, col))
        rows = []
        for row in range(1, max_row + 1):
            cells = []
            for col in range(1, max_col + 1):
                if (row, col) in covered:
                    continue
                cell = sheet.cell(row, col)
                item = {'column': col - 1, 'text': display(cell.value, cell.number_format)}
                merge = anchors.get((row, col))
                if merge:
                    item['colSpan'] = merge.max_col - merge.min_col + 1
                    item['rowSpan'] = merge.max_row - merge.min_row + 1
                style = {}
                if cell.fill.patternType == 'solid':
                    style['backgroundColor'] = color(cell.fill.fgColor)
                style['color'] = color(cell.font.color)
                if cell.font.bold:
                    style['fontWeight'] = 700
                if cell.font.italic:
                    style['fontStyle'] = 'italic'
                if cell.alignment.horizontal in ('left', 'center', 'right'):
                    style['textAlign'] = cell.alignment.horizontal
                elif isinstance(cell.value, (int, float)):
                    style['textAlign'] = 'right'
                item['style'] = {k: v for k, v in style.items() if v is not None}
                cells.append(item)
            rows.append({'number': row, 'cells': cells})
        sheets.append({'name': sheet.title, 'columns': columns, 'rows': rows})
    output = Path(output_path)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps({'title': 'CGI KPI & Content Strategy', 'sheets': sheets},
                                ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    print(f'Exported {len(sheets)} sheets to {output} ({output.stat().st_size:,} bytes)')


if __name__ == '__main__':
    export(*sys.argv[1:])
