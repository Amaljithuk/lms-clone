import Header from "@/app/components/Header";
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Timetable() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Timetable</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
            
            {/* Red Header */}
            <div className="bg-[#E15656] text-white px-6 py-4">
                <h3 className="text-lg font-medium">Timetable</h3>
            </div>

            <div className="p-6">
                
                {/* Date Picker Section */}
                <div className="bg-white border border-gray-200 rounded p-4 mb-6 max-w-md flex items-center gap-3 shadow-sm">
                    <label className="text-sm font-semibold text-gray-700">Date:</label>
                    <div className="relative flex-1">
                        <input 
                            type="date" 
                            defaultValue="2025-12-02"
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 focus:outline-none focus:border-red-400"
                        />
                    </div>
                </div>

                {/* Table Header */}
                <h4 className="text-gray-800 font-semibold mb-4">Class Timetable and Sessions</h4>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-100 rounded-lg">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3">Timeslot</th>
                                <th className="px-6 py-3">Classroom</th>
                                <th className="px-6 py-3">Batch</th>
                                <th className="px-6 py-3">Subject</th>
                                <th className="px-6 py-3">Teacher</th>
                                <th className="px-6 py-3">Session</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="bg-red-50/50">
                                <td className="px-6 py-4 text-red-500 font-medium">10:00 - 12:00</td>
                                <td className="px-6 py-4">Techies Zone</td>
                                <td className="px-6 py-4">Data Science September 2025</td>
                                <td className="px-6 py-4 text-gray-400 italic">--</td>
                                <td className="px-6 py-4 text-gray-400 italic">--</td>
                                <td className="px-6 py-4 text-gray-400 italic">--</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="mt-4 text-xs text-gray-400">
                    Showing 1 to 1 of 1 entries
                </div>

            </div>
        </div>
      </main>
    </>
  );
}