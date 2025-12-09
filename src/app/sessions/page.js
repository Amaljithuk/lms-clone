// import Header from "@/app/components/Header";
import { Search } from 'lucide-react';

export default function Sessions() {
  const sessions = [
    { date: "20-11-2025", name: "20.11.2025", time: "10:00 AM - 12:00 PM", course: "Data science", subject: "Data Science", batch: "Data Science September 2025" },
    { date: "18-11-2025", name: "18.11.2025", time: "10:00 AM - 12:00 PM", course: "Data science", subject: "Data Science", batch: "Data Science September 2025" },
    { date: "17-11-2025", name: "17.11.2025", time: "10:00 AM - 12:00 PM", course: "Data science", subject: "Data Science", batch: "Data Science September 2025" },
    { date: "14-11-2025", name: "14.11.2025", time: "10:00 AM - 12:00 PM", course: "Data science", subject: "Data Science", batch: "Data Science September 2025" },
    { date: "13-11-2025", name: "13.11.2025", time: "10:00 AM - 12:00 PM", course: "Data science", subject: "Data Science", batch: "Data Science September 2025" },
  ];

  return (
    <>
      {/* <Header /> */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Session Recordings</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Red Header with Search */}
            <div className="bg-[#E15656] text-white px-6 py-3 flex justify-between items-center">
                <h3 className="text-lg font-medium">Session Recordings</h3>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="bg-red-400 bg-opacity-30 text-white placeholder-red-100 text-sm rounded border border-red-400 pl-8 pr-3 py-1 focus:outline-none focus:bg-opacity-50"
                    />
                    <Search className="absolute left-2 top-1.5 text-red-100" size={14} />
                </div>
            </div>

            <div className="p-6">
                
                {/* Filters */}
                <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-6 flex flex-wrap items-end gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-600">From:</label>
                        <input type="date" className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 focus:border-red-400 outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-600">To:</label>
                        <input type="date" className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 focus:border-red-400 outline-none" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-6 py-1.5 rounded transition-colors shadow-sm">
                        Submit
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-100 rounded-lg">
                    <table className="w-full text-left text-xs text-gray-600">
                        <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Time</th>
                                <th className="px-4 py-3">Course</th>
                                <th className="px-4 py-3">Subject</th>
                                <th className="px-4 py-3">Batch</th>
                                <th className="px-4 py-3 text-center">Session Recordings</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sessions.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">{row.date}</td>
                                    <td className="px-4 py-3">{row.name}</td>
                                    <td className="px-4 py-3">{row.time}</td>
                                    <td className="px-4 py-3">{row.course}</td>
                                    <td className="px-4 py-3">{row.subject}</td>
                                    <td className="px-4 py-3">{row.batch}</td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="text-blue-500 hover:text-blue-700 font-medium">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
      </main>
    </>
  );
}