import { useState } from 'react';
import { uat } from '../data/mockData';

const STATUS_STYLES = {
  Approved:   'bg-emerald-100 text-emerald-700',
  'In Review': 'bg-blue-100 text-blue-700',
  Pending:    'bg-amber-100 text-amber-700',
};

const STATUS_ORDER = { Approved: 0, 'In Review': 1, Pending: 2 };

export default function UATStatus() {
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...uat].sort((a, b) =>
    sortAsc
      ? STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
      : STATUS_ORDER[b.status] - STATUS_ORDER[a.status]
  );

  const counts = uat.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">UAT Sign-Off Status</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 px-3 text-slate-500 font-medium">Feature</th>
              <th className="text-left py-2 px-3 text-slate-500 font-medium">Owner</th>
              <th
                className="text-left py-2 px-3 text-slate-500 font-medium cursor-pointer select-none hover:text-slate-700"
                onClick={() => setSortAsc(p => !p)}
              >
                Status {sortAsc ? '↑' : '↓'}
              </th>
              <th className="text-left py-2 px-3 text-slate-500 font-medium">Sign-Off Date</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-2.5 px-3 font-medium text-slate-700">{row.feature}</td>
                <td className="py-2.5 px-3 text-slate-500">{row.owner}</td>
                <td className="py-2.5 px-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${STATUS_STYLES[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-slate-400">{row.signOffDate ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex gap-4 text-xs text-slate-500 border-t border-gray-100 pt-3">
        <span className="font-semibold text-emerald-600">{counts['Approved'] ?? 0} Approved</span>
        <span className="font-semibold text-blue-600">{counts['In Review'] ?? 0} In Review</span>
        <span className="font-semibold text-amber-600">{counts['Pending'] ?? 0} Pending</span>
      </div>
    </div>
  );
}
