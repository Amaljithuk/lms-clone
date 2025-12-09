"use client"; // Required for useState
import { useState } from "react";
import { Search } from 'lucide-react';

export default function Courses() {
  // 1. Define your data
  const allCourses = [
    { name: "Data science", batch: "Data Science September 2025", sessions: "42" },
    { name: "Python Core", batch: "Python July 2025-2", sessions: "19" },
    { name: "React JS", batch: "React Development 2025", sessions: "30" }, // Added extra for demo
    { name: "Node JS", batch: "Backend Engineering 2025", sessions: "25" }, // Added extra for demo
  ];

  // 2. State for search
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Filter Logic
  const filteredCourses = allCourses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <div className="mb-6">
         <h2 className="text-2xl font-semibold text-gray-800">Courses</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
          
          {/* Red Header with FUNCTIONAL Search */}
          <div className="bg-[#E15656] text-white px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
              <h3 className="text-lg font-medium">Courses</h3>
              <div className="relative w-full sm:w-auto">
                  <input 
                      type="text" 
                      placeholder="Search courses..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-64 bg-red-400 bg-opacity-30 text-white placeholder-red-100 text-sm rounded border border-red-400 pl-8 pr-3 py-1 focus:outline-none focus:bg-opacity-50 transition-all"
                  />
                  <Search className="absolute left-2 top-1.5 text-red-100" size={14} />
              </div>
          </div>

          <div className="p-6">
              <h4 className="text-gray-700 font-semibold mb-4">Active Courses</h4>
              
              <div className="overflow-x-auto border border-gray-100 rounded-lg">
                  <table className="w-full text-left text-sm text-gray-600">
                      <thead className="bg-sky-50 text-gray-700 font-semibold border-b border-gray-100">
                          <tr>
                              <th className="px-6 py-3">Course Name</th>
                              <th className="px-6 py-3">Batch Name</th>
                              <th className="px-6 py-3">Total No. of Sessions</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                          {filteredCourses.length > 0 ? (
                              filteredCourses.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-blue-500 font-medium">{item.name}</td>
                                    <td className="px-6 py-4 text-blue-500">{item.batch}</td>
                                    <td className="px-6 py-4">{item.sessions}</td>
                                </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="3" className="px-6 py-8 text-center text-gray-400">
                                      No courses found matching "{searchTerm}"
                                  </td>
                              </tr>
                          )}
                      </tbody>
                  </table>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                  Showing {filteredCourses.length} entries
              </div>
          </div>
      </div>
    </main>
  );
}