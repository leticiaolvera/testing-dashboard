export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Testing Status Dashboard</h1>
          <p className="text-slate-400 text-sm mt-0.5">Q2 2026 — Stakeholder &amp; ExCo Report</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full">
            Last updated: 30 Apr 2026
          </span>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />Passed</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500 inline-block" />Failed</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />Skipped</span>
          </div>
        </div>
      </div>
    </header>
  );
}
