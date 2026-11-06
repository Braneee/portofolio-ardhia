'use client';

import React, { useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

export function DocumentPageViewer({ pages, title }: { pages: string[]; title: string }) {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const id = useId();

  function changePage(next: number) {
    if (next === page) return;
    setLoading(true);
    setFailed(false);
    setPage(next);
    scrollRef.current?.scrollTo({ left: 0, top: 0 });
  }

  return (
    <div className="flex flex-col min-h-0" aria-label={`${title}, document viewer`}>
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-5 py-3 bg-[#FAF4EA] border-b border-[#E6DCCC] text-[#3D2E2B] shrink-0">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous page" disabled={page === 0} onClick={() => changePage(page - 1)} className="p-2 border border-[#E6DCCC] bg-white rounded-lg disabled:opacity-30 hover:enabled:bg-[#F5EBE6]">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <label htmlFor={`${id}-page`} className="sr-only">Document page</label>
          <select id={`${id}-page`} value={page} onChange={event => changePage(Number(event.target.value))} className="bg-white border border-[#E6DCCC] rounded-lg px-2 py-2 text-xs font-semibold max-w-[130px]">
            {pages.map((_, index) => <option key={index} value={index}>Page {index + 1} of {pages.length}</option>)}
          </select>
          <button type="button" aria-label="Next page" disabled={page === pages.length - 1} onClick={() => changePage(page + 1)} className="p-2 border border-[#E6DCCC] bg-white rounded-lg disabled:opacity-30 hover:enabled:bg-[#F5EBE6]">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} role="region" tabIndex={0} aria-label="Document page content" className="min-h-0 overflow-auto overscroll-contain bg-white">
        {loading && <div role="status" className="flex items-center justify-center gap-2 p-5 text-sm text-[#3D2E2B]"><Loader2 className="w-4 h-4 animate-spin" /> Loading page…</div>}
        {failed && (
          <div role="alert" className="p-6 text-sm text-center text-[#3D2E2B]">
            <p>This page could not be loaded. Check your connection and try again.</p>
            <button type="button" onClick={() => { setFailed(false); setLoading(true); setAttempt(value => value + 1); }} className="mt-3 rounded-full bg-white border border-[#E6DCCC] px-4 py-2 font-semibold">Try again</button>
          </div>
        )}
        <img key={`${page}-${attempt}`} src={pages[page]} alt={`${title} — page ${page + 1} of ${pages.length}`} onLoad={() => setLoading(false)} onError={() => { setLoading(false); setFailed(true); }} draggable={false} style={{ display: loading || failed ? 'none' : 'block' }} className="w-full h-auto bg-white" />
      </div>
    </div>
  );
}
