import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import Chart from '../components/Chart';

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value="2,543"
            change="+12% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatCard
            title="Revenue"
            value="$45,231"
            change="+8% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatCard
            title="Orders"
            value="1,234"
            change="-3% from last month"
            changeType="negative"
            icon={ShoppingCart}
          />
          <StatCard
            title="Growth"
            value="23.5%"
            change="No change"
            changeType="neutral"
            icon={TrendingUp}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Users</h2>
          <DataTable />
        </div>

        <div>
          <Chart />
        </div>
      </div>
    </DashboardLayout>
  );
}
