import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardTab = () => {
  // Sample data for summary cards
  const summaryData = [
    { title: 'Total Programs', value: '24', change: '+2', description: 'Compared to last month' },
    { title: 'Active Volunteers', value: '120', change: '+12', description: 'New volunteers this month' },
    { title: 'Total Donations', value: '$50,000', change: '+$5,000', description: 'Total this quarter' },
  ];

  // Sample data for recent activities
  const recentActivities = [
    { id: 1, title: 'New Volunteer Joined', time: '2 hours ago' },
    { id: 2, title: 'Donation Received', time: '5 hours ago' },
    { id: 3, title: 'Program Updated', time: '1 day ago' },
    { id: 4, title: 'Event Scheduled', time: '3 days ago' },
  ];

  // Sample data for the line chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Progress',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Progress',
      },
    },
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-neutral-800">Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {summaryData.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
            <h3 className="text-lg font-medium text-neutral-600">{card.title}</h3>
            <p className="text-3xl font-bold text-neutral-800 mt-2">{card.value}</p>
            <p className={`text-sm mt-1 ${card.change.startsWith('+') ? 'text-success-500' : 'text-error-500'}`}>
              {card.change} <span className="text-neutral-500">{card.description}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
        <h3 className="text-xl font-semibold text-neutral-700">Recent Activities</h3>
        <ul className="mt-4 space-y-3">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="p-4 bg-neutral-50 rounded-lg">
              <div className="flex justify-between">
                <span className="font-medium text-neutral-800">{activity.title}</span>
                <span className="text-sm text-neutral-500">{activity.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardTab;
