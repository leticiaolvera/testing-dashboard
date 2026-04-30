import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { defects } from '../data/mockData';

export default function DefectTracker() {
  const totalOpen = defects.reduce((s, d) => s + d.open, 0);
  const totalInProgress = defects.reduce((s, d) => s + d.inProgress, 0);
  const totalResolved = defects.reduce((s, d) => s + d.resolved, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Bug &amp; Defect Tracking</h2>
        <div className="flex gap-4 text-xs text-slate-500">
          <span className="font-semibold text-red-600">{totalOpen} Open</span>
          <span className="font-semibold text-blue-600">{totalInProgress} In Progress</span>
          <span className="font-semibold text-emerald-600">{totalResolved} Resolved</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={defects} margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="severity" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} />
          <Bar dataKey="open"       name="Open"        stackId="a" fill="#ef4444" />
          <Bar dataKey="inProgress" name="In Progress" stackId="a" fill="#3b82f6" />
          <Bar dataKey="resolved"   name="Resolved"    stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <table className="w-full text-xs mt-4 border-t border-gray-100 pt-2">
        <thead>
          <tr className="text-slate-400">
            <th className="text-left py-1.5 font-medium">Severity</th>
            <th className="text-right py-1.5 font-medium text-red-500">Open</th>
            <th className="text-right py-1.5 font-medium text-blue-500">In Progress</th>
            <th className="text-right py-1.5 font-medium text-emerald-600">Resolved</th>
          </tr>
        </thead>
        <tbody>
          {defects.map((d, i) => (
            <tr key={i} className="border-t border-gray-50">
              <td className="py-1.5 font-semibold text-slate-700">{d.severity}</td>
              <td className="py-1.5 text-right text-red-600">{d.open}</td>
              <td className="py-1.5 text-right text-blue-600">{d.inProgress}</td>
              <td className="py-1.5 text-right text-emerald-600">{d.resolved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
