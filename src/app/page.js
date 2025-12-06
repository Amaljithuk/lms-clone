import Header from "@/app/components/Header";
import { BookOpen, MonitorPlay, Layers, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: "Total Courses", value: "2", icon: BookOpen, color: "bg-emerald-500" },
    { label: "Today's Sessions", value: "0", icon: MonitorPlay, color: "bg-orange-400" },
    { label: "Total Sessions", value: "67", icon: Layers, color: "bg-blue-500" },
    { label: "No Dues", value: "0", icon: CheckCircle, color: "bg-red-400" },
  ];

  return (
    <>
      {/* Header: Fixed at top */}
      <Header />
      
      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        
        {/* Page Title / Breadcrumb Area */}
        <div className="mb-8">
           <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        </div>

        {/* Dashboard Content */}
        <div className="w-full">
          {/* Red Banner Header */}
          <div className="bg-[#E15656] text-white px-8 py-5 rounded-t-lg shadow-md">
            <h3 className="text-lg font-semibold">Dashboard Overview</h3>
          </div>

          {/* Stats Grid Container */}
          <div className="bg-white p-8 rounded-b-lg shadow-md border border-t-0 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-center justify-between shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex-1">
                    <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
                    <p className="text-4xl font-bold text-gray-900 mt-3">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-full text-white shadow-lg flex-shrink-0`}>
                    <stat.icon size={28} strokeWidth={2} />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}