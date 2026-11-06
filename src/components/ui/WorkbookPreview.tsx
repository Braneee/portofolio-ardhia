'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Expand, FileSpreadsheet, Loader2, LockKeyhole, Minimize2 } from 'lucide-react';

interface PreviewCell {
  column: number;
  text: string;
  colSpan?: number;
  rowSpan?: number;
  style?: React.CSSProperties;
}

interface PreviewSheet {
  name: string;
  columns: { label: string; width: number }[];
  rows: { number: number; cells: PreviewCell[] }[];
}

interface PreviewWorkbook {
  title: string;
  sheets: PreviewSheet[];
}

export function WorkbookPreview({ src }: { src: string }) {
  const [workbook, setWorkbook] = useState<PreviewWorkbook | null>(null);
  const [activeSheet, setActiveSheet] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectId = useId();

  useEffect(() => {
    const controller = new AbortController();
    setWorkbook(null);
    setActiveSheet(0);
    setFailed(false);
    fetch(src, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Unable to load workbook preview');
        return response.json();
      })
      .then((data: PreviewWorkbook) => {
        if (!data.sheets?.length) throw new Error('No sheets available');
        setWorkbook(data);
      })
      .catch(error => {
        if (error.name !== 'AbortError') setFailed(true);
      });
    return () => controller.abort();
  }, [src, attempt]);

  const sheet = workbook?.sheets[activeSheet];

  return (
    <section className="mt-10 min-w-0" aria-label="KPI and content strategy workbook">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm">
          <FileSpreadsheet className="w-4 h-4" /> KPI &amp; Content Strategy
        </h4>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B8065]">
          <LockKeyhole className="w-3.5 h-3.5" /> View only
        </span>
      </div>
      <p className="text-sm text-[#3D2E2B]/70 mb-5 leading-relaxed">
        Explore the project workbook. Select a sheet and scroll to read its contents.
      </p>

      <div className="rounded-2xl border border-[#E6DCCC] overflow-hidden bg-white">
        {!workbook && !failed && (
          <div role="status" className="flex items-center justify-center gap-2 p-12 text-sm text-[#3D2E2B]/70">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading workbook…
          </div>
        )}
        {failed && (
          <div role="alert" className="p-8 text-center text-sm text-[#3D2E2B]">
            <p>The workbook preview could not be loaded.</p>
            <button type="button" onClick={() => setAttempt(value => value + 1)} className="mt-3 px-4 py-2 border border-[#E6DCCC] rounded-full font-semibold hover:bg-[#FAF4EA]">
              Try again
            </button>
          </div>
        )}
        {workbook && sheet && (
          <>
            <div className="flex flex-wrap items-end justify-between gap-3 p-4 bg-[#FAF4EA] border-b border-[#E6DCCC]">
              <div className="min-w-0 flex-1 max-w-sm">
                <label htmlFor={selectId} className="block mb-1.5 text-[11px] uppercase tracking-wider font-bold text-[#3D2E2B]/60">
                  Worksheet · {activeSheet + 1} of {workbook.sheets.length}
                </label>
                <div className="relative">
                  <select id={selectId} value={activeSheet} onChange={event => {
                    setActiveSheet(Number(event.target.value));
                    scrollRef.current?.scrollTo({ top: 0, left: 0 });
                  }} className="appearance-none w-full bg-white border border-[#E6DCCC] rounded-xl pl-3 pr-9 py-2.5 text-sm font-semibold text-[#3D2E2B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E88B73]">
                    {workbook.sheets.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none text-[#3D2E2B]/60" />
                </div>
              </div>
              <button type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded} className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#E6DCCC] bg-white text-xs font-semibold text-[#3D2E2B] hover:bg-[#F5EBE6]">
                {expanded ? <Minimize2 className="w-4 h-4" /> : <Expand className="w-4 h-4" />}
                {expanded ? 'Compact view' : 'Expand view'}
              </button>
            </div>
            <div ref={scrollRef} tabIndex={0} role="region" aria-label={`${sheet.name}, read-only spreadsheet. Scroll horizontally and vertically to read.`} className={`overflow-auto overscroll-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E88B73] ${expanded ? 'max-h-[75vh]' : 'max-h-[480px]'}`}>
              <table className="table-fixed border-separate border-spacing-0 text-xs text-[#222]" style={{ width: 44 + sheet.columns.reduce((total, column) => total + column.width, 0) }}>
                <caption className="sr-only">{workbook.title} — {sheet.name}. Saved workbook values, view only.</caption>
                <colgroup>
                  <col style={{ width: 44 }} />
                  {sheet.columns.map(column => <col key={column.label} style={{ width: column.width }} />)}
                </colgroup>
                <thead className="sticky top-0 z-20">
                  <tr>
                    <th aria-label="Row number" className="sticky left-0 z-30 bg-[#F0EBE5] border-b border-r border-[#DDD5CB] h-8" />
                    {sheet.columns.map(column => <th scope="col" key={column.label} className="bg-[#F0EBE5] border-b border-r border-[#DDD5CB] text-[#3D2E2B]/60 font-medium h-8">{column.label}</th>)}
                  </tr>
                </thead>
                <tbody key={sheet.name}>
                  {sheet.rows.map(row => (
                    <tr key={row.number}>
                      <th scope="row" className="sticky left-0 z-10 bg-[#F0EBE5] border-b border-r border-[#DDD5CB] text-[#3D2E2B]/60 text-center font-normal py-2 align-top">{row.number}</th>
                      {row.cells.map(cell => (
                        <td key={cell.column} colSpan={cell.colSpan} rowSpan={cell.rowSpan} title={`${sheet.columns[cell.column].label}${row.number}`} style={cell.style} className="border-b border-r border-[#E5E1DB] px-3 py-2 align-top whitespace-pre-wrap break-words leading-relaxed [overflow-wrap:anywhere]">
                          {cell.text || '\u00a0'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-4 py-3 bg-[#FAF4EA] border-t border-[#E6DCCC] text-[11px] text-[#3D2E2B]/60">
              Saved workbook snapshot. Values are shown as saved in the source file.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
