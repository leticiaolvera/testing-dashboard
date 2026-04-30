import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { testResults } from '../data/mockData';

const COLORS = ['#10b981', '#ef4444', '#f59e0b'];

const renderCenterLabel = ({ cx, cy, total }) => (
  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
    <tspan x={cx} dy="-0.4em" fontSize="28" fontWeight="700" fill="#1e293b">{total}</tspan>
    <tspan x={cx} dy="1.5em" fontSize="12" fill="#94a3b8">Total Tests</tspan>
  </text>
);

export default function TestResultsChart() {
  const data = [
    { name: 'Passed',  value: testResults.passed },
    { name: 'Failed',  value: testResults.failed },
    { name: 'Skipped', value: testResults.skipped },
  ];
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Test Results</h2>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
          </Pie>
          {renderCenterLabel({ cx: '50%', cy: 120, total })}
          <Tooltip formatter={(v, name) => [`${v} (${((v / total) * 100).toFixed(1)}%)`, name]} />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
