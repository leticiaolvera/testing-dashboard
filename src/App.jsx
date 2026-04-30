import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import TestResultsChart from './components/TestResultsChart';
import CoverageChart from './components/CoverageChart';
import UATStatus from './components/UATStatus';
import DefectTracker from './components/DefectTracker';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <SummaryCards />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestResultsChart />
          <CoverageChart />
        </div>
        <UATStatus />
        <DefectTracker />
      </main>
      <footer className="text-center text-xs text-slate-400 py-6">
        Testing Status Dashboard — Confidential — ExCo &amp; Stakeholders Only
      </footer>
    </div>
  );
}
