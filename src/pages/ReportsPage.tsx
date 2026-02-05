import { FileText, Download } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const reports = [
  { id: 1, name: 'Monthly Sales Report', date: 'Jan 31, 2024', size: '2.4 MB' },
  { id: 2, name: 'User Activity Summary', date: 'Jan 30, 2024', size: '1.8 MB' },
  { id: 3, name: 'Inventory Status Report', date: 'Jan 29, 2024', size: '0.9 MB' },
  { id: 4, name: 'Revenue Analysis', date: 'Jan 28, 2024', size: '3.2 MB' },
];

export default function ReportsPage() {
  return (
    <DashboardLayout title="Reports">
      <div className="space-y-6">
        <div>
          <p className="text-gray-600 mb-6">View and download system reports</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{report.name}</h3>
                  <p className="text-sm text-gray-500">{report.date} • {report.size}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Download</span>
              </button>
            </div>
          ))}
        </div>

        <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors font-medium">
          Generate New Report
        </button>
      </div>
    </DashboardLayout>
  );
}
