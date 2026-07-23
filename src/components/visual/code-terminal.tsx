'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Check, Play, Copy, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<'system' | 'benchmark' | 'tests'>('system');
  const [copied, setCopied] = useState(false);

  const terminalOutputs = {
    system: [
      { type: 'input', text: '$ dhia-cli --status --inspect' },
      { type: 'output', text: '✔ Environment: Node.js v20.11.0 / Go 1.22 / Rust 1.76' },
      { type: 'output', text: '✔ Core Web Vitals: LCP 0.6s | CLS 0.00 | FID 2ms' },
      { type: 'output', text: '✔ Microservices: 12 Active Nodes Across 3 Regions' },
      { type: 'success', text: 'Status: 100% Operational (99.999% SLA Uptime)' },
    ],
    benchmark: [
      { type: 'input', text: '$ cargo bench --package nexus-mesh' },
      { type: 'output', text: 'Benchmarking lock_free_ring_buffer... 120,400 ops/sec' },
      { type: 'output', text: 'Benchmarking grpc_ingress_payload... 4.12ms p99 latency' },
      { type: 'success', text: '✔ Benchmark Passed: Performance 42% faster than baseline' },
    ],
    tests: [
      { type: 'input', text: '$ pnpm test --coverage' },
      { type: 'output', text: 'PASS src/services/ledger.test.ts (14 tests passed)' },
      { type: 'output', text: 'PASS src/components/project-modal.test.tsx (8 tests passed)' },
      { type: 'success', text: 'Test Suites: 22 passed, 22 total | Coverage: 98.4%' },
    ],
  };

  const currentLog = terminalOutputs[activeTab];

  const handleCopy = () => {
    const textToCopy = currentLog.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl glass-panel shadow-2xl overflow-hidden border border-white/10 dark:border-slate-800 bg-slate-950 text-slate-200 text-xs font-mono">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" /> dhia@architect-node:~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('system')}
            className={`px-2.5 py-1 rounded text-[10px] font-sans font-medium transition-colors ${
              activeTab === 'system' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            System
          </button>
          <button
            onClick={() => setActiveTab('benchmark')}
            className={`px-2.5 py-1 rounded text-[10px] font-sans font-medium transition-colors ${
              activeTab === 'benchmark' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Benchmark
          </button>
          <button
            onClick={() => setActiveTab('tests')}
            className={`px-2.5 py-1 rounded text-[10px] font-sans font-medium transition-colors ${
              activeTab === 'tests' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tests
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          title="Copy output"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Content Box */}
      <div className="p-4 sm:p-6 space-y-2.5 min-h-[190px]">
        {currentLog.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, delay: idx * 0.05 }}
            className={`flex items-start gap-2 ${
              line.type === 'input'
                ? 'text-sky-300 font-semibold'
                : line.type === 'success'
                ? 'text-emerald-400 font-semibold'
                : 'text-slate-300'
            }`}
          >
            <span className="leading-relaxed">{line.text}</span>
          </motion.div>
        ))}

        {/* Blinking Cursor */}
        <div className="flex items-center gap-1.5 pt-1">
          <span className="text-sky-400">$</span>
          <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
