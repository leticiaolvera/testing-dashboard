import { testResults, coverage, defects } from '../data/mockData';

function Card({ label, value, sub, valueClass = 'text-slate-800' }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{label}</p>
      <p className={`text-4xl font-bold ${valueClass}`}>{value}</p>
      {sub && <p className="text-sm text-slate-400 mt-1">{sub}</p>}
    </div>
  );
}

export default function SummaryCards() {
  const total = testResults.passed + testResults.failed + testResults.skipped;
  const passRate = ((testResults.passed / total) * 100).toFixed(1);
  const avgCoverage = (coverage.reduce((s, c) => s + c.percent, 0) / coverage.length).toFixed(1);
  const openCriticalHigh = defects
    .filter(d => d.severity === 'Critical' || d.severity === 'High')
    .reduce((s, d) => s + d.open, 0);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card label="Total Tests Run" value={total.toLocaleString()} sub="Across all modules" />
      <Card
        label="Pass Rate"
        value={`${passRate}%`}
        sub={`${testResults.failed} failed · ${testResults.skipped} skipped`}
        valueClass={parseFloat(passRate) >= 90 ? 'text-emerald-600' : 'text-amber-600'}
      />
      <Card
        label="Avg. Coverage"
        value={`${avgCoverage}%`}
        sub="Target: 80%"
        valueClass={parseFloat(avgCoverage) >= 80 ? 'text-emerald-600' : 'text-amber-600'}
      />
      <Card
        label="Open Defects (Crit+High)"
        value={openCriticalHigh}
        sub="Critical + High severity"
        valueClass={openCriticalHigh === 0 ? 'text-emerald-600' : openCriticalHigh <= 5 ? 'text-amber-600' : 'text-red-600'}
      />
    </div>
  );
}
