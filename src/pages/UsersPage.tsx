import DashboardLayout from '../components/DashboardLayout';
import DataTable from '../components/DataTable';

export default function UsersPage() {
  return (
    <DashboardLayout title="Users">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Manage and view all users in the system</p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
            Add User
          </button>
        </div>
        <DataTable />
      </div>
    </DashboardLayout>
  );
}
