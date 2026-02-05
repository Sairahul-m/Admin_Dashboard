import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface TopBarProps {
  pageTitle: string;
}

export default function TopBar({ pageTitle }: TopBarProps) {
  const navigate = useNavigate();
  const { logout, userEmail } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userDisplay = userEmail?.split('@')[0] || 'Admin';

  return (
    <div className="h-16 bg-white border-b border-gray-200 fixed top-0 left-64 right-0 z-10">
      <div className="h-full px-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">{pageTitle}</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 capitalize">{userDisplay}</span>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
