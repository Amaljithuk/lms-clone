"use client";
import { useState } from 'react';
import Header from "@/app/components/Header";
import { Star, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Feedbacks() {
  // 1. State for the Form
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
      category: "Select Category",
      subject: "",
      message: ""
  });

  // 2. Dummy Data for History Table
  const history = [
    { id: 101, date: "01-12-2025", category: "Course Content", subject: "Python module missing", rating: 4, status: "Resolved" },
    { id: 102, date: "28-11-2025", category: "Platform Issue", subject: "Login error on mobile", rating: 2, status: "Pending" },
    { id: 103, date: "15-11-2025", category: "Instructor", subject: "Great session on React", rating: 5, status: "Resolved" },
  ];

  // Helper to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully! (This is a demo)");
    setRating(0);
    setFormData({ category: "Select Category", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Feedback & Support</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: Submission Form */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-[#E15656] text-white px-6 py-4">
                        <h3 className="text-lg font-medium">Submit Feedback</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        {/* Category Select */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Feedback Type</label>
                            <select 
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-red-400 bg-white"
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                            >
                                <option disabled>Select Category</option>
                                <option>Course Content</option>
                                <option>Instructor</option>
                                <option>Platform / Technical</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Star Rating */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Rate your experience</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <Star 
                                            size={28} 
                                            className={`${star <= (hoverRating || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                            <input 
                                type="text" 
                                placeholder="Brief summary"
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-red-400"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                            <textarea 
                                rows="4"
                                placeholder="Tell us more details..."
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-red-400 resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded shadow-sm flex items-center justify-center gap-2 transition-colors">
                            <Send size={16} />
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </div>

            {/* RIGHT COLUMN: History Table */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
                    <div className="bg-[#E15656] text-white px-6 py-4 flex justify-between items-center">
                        <h3 className="text-lg font-medium">Feedback History</h3>
                    </div>

                    <div className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4">Category</th>
                                        <th className="px-6 py-4">Subject</th>
                                        <th className="px-6 py-4">Rating</th>
                                        <th className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {history.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-xs">{item.date}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-800">{item.subject}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={14} className={i < item.rating ? "fill-current" : "text-gray-200"} />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.status === 'Resolved' ? (
                                                    <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold uppercase tracking-wide">
                                                        <CheckCircle size={14} /> Resolved
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1.5 text-orange-500 text-xs font-bold uppercase tracking-wide">
                                                        <Clock size={14} /> Pending
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Empty state (Hidden if data exists, but good to have code for) */}
                        {history.length === 0 && (
                            <div className="p-8 text-center flex flex-col items-center text-gray-400">
                                <AlertCircle size={48} className="mb-2 opacity-20" />
                                <p>No feedback history found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
      </main>
    </>
  );
}