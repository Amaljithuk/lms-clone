// import Header from "@/app/components/Header";
import { Search } from 'lucide-react';

export default function Payments() {
  const payments = [
    { course: "Data science", batch: "Data Science September 2025", action: "View" },
    { course: "Python Core", batch: "Python July 2025-2", action: "View" },
  ];

  return (
    <>
      {/* <Header /> */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Red Header with Search */}
            <div className="bg-[#E15656] text-white px-6 py-3 flex justify-between items-center">
                <h3 className="text-lg font-medium">Payments</h3>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="bg-red-400 bg-opacity-30 text-white placeholder-red-100 text-sm rounded border border-red-400 pl-8 pr-3 py-1 focus:outline-none focus:bg-opacity-50"
                    />
                    <Search className="absolute left-2 top-1.5 text-red-100" size={14} />
                </div>
            </div>

            {/* Table */}
            <div className="p-6">
                <h4 className="text-gray-700 font-semibold mb-4">Payments</h4>
                
                <div className="overflow-x-auto border border-gray-100 rounded-lg">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-sky-50 text-gray-700 font-semibold border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-3">Course</th>
                                <th className="px-6 py-3">Batch</th>
                                <th className="px-6 py-3">Payment History</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {payments.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-blue-500 font-medium">{item.course}</td>
                                    <td className="px-6 py-4 text-blue-500">{item.batch}</td>
                                    <td className="px-6 py-4">
                                        <button className="text-blue-600 hover:text-blue-800 text-xs font-semibold">
                                            {item.action}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-xs text-gray-400">
                    Showing 1 to 2 of 2 entries
                </div>
            </div>
        </div>
      </main>
    </>
  );
}