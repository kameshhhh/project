import React, { useState } from 'react';
import { LayoutDashboard, Server, Activity, ShieldCheck, Settings, LogOut, Bell } from 'lucide-react';

export function AppLayout({ children, user, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: Server },
    { id: 'metrics', label: 'Telemetry', icon: Activity },
    { id: 'security', label: 'Security & Keys', icon: ShieldCheck },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#0a0e17] text-slate-100">
      <aside className="w-64 border-r border-slate-800 bg-[#0f1422] flex flex-col p-4">
        <div className="flex items-center gap-3 px-2 py-4 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-glow">
            DP
          </div>
          <span className="font-bold text-lg tracking-wider text-white">DevPulse</span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 pt-4 mt-auto">
          <button onClick={onLogout} className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-rose-400 hover:bg-rose-500/10">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-slate-800 px-8 flex items-center justify-between bg-[#0f1422]/60 backdrop-blur">
          <h1 className="text-xl font-semibold text-white capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-medium">
              {user?.firstName?.[0] || 'K'}
            </div>
          </div>
        </header>

        <div className="p-8 flex-1">{children}</div>
      </main>
    </div>
  );
}
