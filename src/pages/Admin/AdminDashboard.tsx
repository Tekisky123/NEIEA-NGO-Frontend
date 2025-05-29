import { useState } from "react";
import { motion } from "framer-motion";
import DashboardTab from "./AdminTabs/DashboardTab";
import ProgramsTab from "./AdminTabs/ProgramsTab";
import VolunteersTab from "./AdminTabs/VolunteersTab";
import DonationsTab from "./AdminTabs/DonationsTab";
import EventsTab from "./AdminTabs/EventsTab";
import CoursesTab from "./AdminTabs/CoursesTab";
import ReportsTab from "./AdminTabs/ReportsTab";
import SettingsTab from "./AdminTabs/SettingsTab";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "programs":
        return <ProgramsTab />;
      case "volunteers":
        return <VolunteersTab />;
      case "donations":
        return <DonationsTab />;
      case "events":
        return <EventsTab />;
      case "courses":
        return <CoursesTab />;
      case "reports":
        return <ReportsTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-100">
      <header className="px-10 bg-gradient-to-r from-primary-600 to-primary-800 text-white py-6 shadow flex justify-between items-center">
        <h1 className="text-3xl font-bold">NEIEA Admin Dashboard</h1>
        <button className="text-white bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 transition duration-300">
          Logout
        </button>
      </header>
      <div className="flex flex-1">
        <nav className="w-64 bg-white p-4 shadow-lg">
          <ul className="space-y-2">
            {[
              "dashboard",
              "programs",
              "volunteers",
              "donations",
              "events",
              "courses",
              "reports",
              "settings",
            ].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left p-3 rounded-lg hover:bg-primary-100 transition duration-200 flex items-center space-x-2 ${
                    activeTab === tab
                      ? "bg-primary-100 text-primary-600 font-semibold"
                      : "text-neutral-600"
                  }`}
                >
                  <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-1 p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            {renderTabContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
