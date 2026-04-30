import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ReferenceLine, Cell, ResponsiveContainer,
} from 'recharts';
import { coverage } from '../data/mockData';

function barColor(pct) {
  if (pct >= 80) return '#10b981';
  if (pct >= 60) return '#f59e0b';
  return '#ef4444';
}

export default function CoverageChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Code Coverage by Module</h2>
        <span className="text-xs text-slate-400">Target: 80%</span>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={coverage} layout="vertical" margin={{ left: 16, right: 24, top: 4, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tickFormatter={v => `${v}%`} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="module" width={120} tick={{ fontSize: 11 }} />
          <Tooltip formatter={v => [`${v}%`, 'Coverage']} />
          <ReferenceLine x={80} stroke="#6366f1" strokeDasharray="4 4" label={{ value: '80%', position: 'top', fontSize: 10, fill: '#6366f1' }} />
          <Bar dataKey="percent" radius={[0, 4, 4, 0]}>
            {coverage.map((c, i) => <Cell key={i} fill={barColor(c.percent)} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-3 text-xs text-slate-400 justify-end">
        <span><span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1" />≥80%</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-1" />60–79%</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1" />&lt;60%</span>
      </div>
    </div>
  );
}
