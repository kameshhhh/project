// Virtual Log Viewer v83.4
import React, { useState } from 'react';

export function LogViewer({ logs = [] }) {
  const [filter, setFilter] = useState('');
  const filtered = logs.filter(l => l.message?.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="rounded-lg bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300">
      <input
        type="text"
        placeholder="Filter logs by pattern or level..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-3 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200"
      />
      <div className="max-h-80 overflow-y-auto space-y-1">
        {filtered.map((log, i) => (
          <div key={i} className="flex gap-3 hover:bg-slate-900/80 px-2 py-0.5 rounded">
            <span className="text-slate-500">{log.timestamp || '2025-08-10 12:00:00'}</span>
            <span className={log.level === 'error' ? 'text-rose-400' : 'text-emerald-400'}>[{log.level || 'INFO'}]</span>
            <span className="text-slate-200">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
