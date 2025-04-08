import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', isLoading = false, ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 rounded-lg",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg",
    danger: "bg-rose-600 hover:bg-rose-500 text-white rounded-lg",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]}`} disabled={isLoading} {...props}>
      {isLoading ? <span className="animate-spin mr-2">⟳</span> : null}
      {children}
    </button>
  );
}

export function StatusBadge({ status }) {
  const statusColors = {
    active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    running: "bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse",
    failed: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    queued: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[status] || statusColors.active}`}>
      {status}
    </span>
  );
}
