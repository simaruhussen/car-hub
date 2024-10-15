
import Link from 'next/link';
import { ReactNode } from 'react';

interface AdminDashboardProps {
  children: ReactNode;
}

const AdminDashboard = ({ children }: AdminDashboardProps) => {
  return (
    <div className="flex min-h-screen pt-20">
      
      <aside className="w-1/4 bg-gray-800 text-white p-6">
        <nav className="flex flex-col space-y-4">
          <Link href="/dashboard/addcar" className="hover:bg-gray-700 p-2 rounded">
             Add New Car
          </Link>
          <Link href="/dashboard/viewrequests" className="hover:bg-gray-700 p-2 rounded">
            View Requests
          </Link>
          <Link href="/dashboard/deletecar" className="hover:bg-gray-700 p-2 rounded">
            Delete Existing Car
          </Link>
        </nav>
      </aside>

      
      <main className="w-3/4 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default AdminDashboard;
