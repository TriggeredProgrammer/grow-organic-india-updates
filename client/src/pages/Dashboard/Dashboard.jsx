import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-[#f5f5eb]">
      {/* Sidebar */}
      <aside
        className={`bg-[#224b3a] text-white transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-60"
        }`}
      >
        <div
          className="flex items-center justify-between px-4 py-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <div className="text-xl font-bold">{isSidebarCollapsed ? "A" : "Admin"}</div>
          {!isSidebarCollapsed && (
            <i className="fas fa-bars text-lg cursor-pointer"></i>
          )}
        </div>
        <nav className="mt-4">
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center px-4 hover:bg-[#1e3f31] cursor-pointer">
              <i className="fas fa-dashboard"></i>
              {!isSidebarCollapsed && <span className="ml-4">Dashboard</span>}
            </li>
            <li className="flex items-center px-4 hover:bg-[#1e3f31] cursor-pointer">
              <i className="fas fa-wallet"></i>
              {!isSidebarCollapsed && <span className="ml-4">Wallet</span>}
            </li>
            <li className="flex items-center px-4 hover:bg-[#1e3f31] cursor-pointer">
              <i className="fas fa-chart-bar"></i>
              {!isSidebarCollapsed && <span className="ml-4">Analytics</span>}
            </li>
            <li className="flex items-center px-4 hover:bg-[#1e3f31] cursor-pointer">
              <i className="fas fa-users"></i>
              {!isSidebarCollapsed && <span className="ml-4">Users</span>}
            </li>
            <li className="flex items-center px-4 hover:bg-[#1e3f31] cursor-pointer">
              <i className="fas fa-gear"></i>
              {!isSidebarCollapsed && <span className="ml-4">Settings</span>}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-[#f5f5eb] p-4 shadow-md">
          <div className="flex items-center space-x-2">
            <i className="fas fa-search text-gray-600"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-gray-600 cursor-pointer"></i>
            <i className="fas fa-user-circle text-gray-600 cursor-pointer"></i>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#224b3a] text-white p-4 rounded shadow-lg">
            <h4 className="text-lg">Total Balance</h4>
            <h2 className="text-3xl font-bold">$4,156.45</h2>
          </div>
          <div className="bg-[#224b3a] text-white p-4 rounded shadow-lg">
            <h4 className="text-lg">Income</h4>
            <h2 className="text-3xl font-bold">$3,146.45</h2>
          </div>
          <div className="bg-[#224b3a] text-white p-4 rounded shadow-lg">
            <h4 className="text-lg">Expenses</h4>
            <h2 className="text-3xl font-bold">$1,146.45</h2>
          </div>
          <div className="bg-[#224b3a] text-white p-4 rounded shadow-lg">
            <h4 className="text-lg">All Profits</h4>
            <h2 className="text-3xl font-bold">$4,156.45</h2>
          </div>
          <div className="bg-[#224b3a] text-white p-4 rounded shadow-lg">
            <h4 className="text-lg">Graph</h4>
            <h2 className="text-3xl font-bold">$3,146.45</h2>
          </div>
          <div className="bg-[#224b3a] text-white p-4 rounded shadow-lg">
            <h4 className="text-lg">User Tree</h4>
            <h2 className="text-3xl font-bold">$1,146.45</h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
