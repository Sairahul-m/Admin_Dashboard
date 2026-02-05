import { TrendingUp } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import Chart from '../components/Chart';

export default function AnalyticsPage() {
  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Page Views</h3>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">12,543</p>
            <p className="text-sm text-green-600 mt-2">+8% from last period</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Average Duration</h3>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">4m 23s</p>
            <p className="text-sm text-blue-600 mt-2">+2% from last period</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Bounce Rate</h3>
              <TrendingUp className="w-4 h-4 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">32.4%</p>
            <p className="text-sm text-red-600 mt-2">-5% from last period</p>
          </div>
        </div>

        <div>
          <Chart />
        </div>
      </div>
    </DashboardLayout>
  );
}
