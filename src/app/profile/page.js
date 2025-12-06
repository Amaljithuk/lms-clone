import Header from "@/app/components/Header";
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function Profile() {
  return (
    <>
      <Header />
      
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        
        {/* Page Title */}
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Red Header Bar */}
            <div className="bg-[#E15656] text-white px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-medium">Profile</h3>
                <button className="bg-red-700 hover:bg-red-800 text-white text-xs px-4 py-1.5 rounded uppercase font-semibold tracking-wide transition-colors">
                    Edit
                </button>
            </div>

            <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* LEFT COLUMN: Avatar & Status */}
                    <div className="lg:w-1/3 flex flex-col gap-6">
                        
                        {/* Profile Card */}
                        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center border border-gray-100">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
                                <img 
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sruthi" 
                                    alt="Sruthi" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-lg font-bold text-gray-800">Sruthi Dayanandan</h2>
                            <p className="text-xs text-gray-500 mb-2">Student ID: 6108633867</p>
                            <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                Student
                            </span>
                            <p className="text-xs text-gray-500">Center: Carnival Infopark Kakkanad</p>
                        </div>

                        {/* Status & Completion */}
                        <div className="flex gap-4">
                            <div className="flex-1 bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center justify-center">
                                <div className="bg-green-100 p-2 rounded-full mb-2">
                                    <CheckCircle size={20} className="text-green-600" />
                                </div>
                                <span className="text-xs text-gray-500 font-medium">Status</span>
                                <span className="text-sm font-bold text-green-600">Active</span>
                            </div>
                            <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100 flex flex-col items-center justify-center">
                                <div className="bg-red-100 p-2 rounded-full mb-2">
                                    <AlertCircle size={20} className="text-red-500" />
                                </div>
                                <span className="text-xs text-gray-500 font-medium">Profile</span>
                                <span className="text-sm font-bold text-red-500">40%</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Information Details */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Personal Info */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-700 mb-4 border-b pb-2">Personal Information</h4>
                            <div className="space-y-4">
                                <InfoRow label="Name" value="Sruthi Dayanandan" />
                                <InfoRow label="Username" value="sruthi123@techmindz" />
                                <InfoRow label="Gender" value="Female" />
                                <InfoRow label="Date of Birth" value="27-01-1999" />
                                <InfoRow label="Country" value="India" />
                                <InfoRow label="State" value="Kerala" />
                                <InfoRow label="Interested in Placement" value="Yes" />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-700 mb-4 border-b pb-2">Contact Information</h4>
                            <div className="space-y-4">
                                <InfoRow label="Phone" value="8304942932" />
                                <InfoRow label="Email" value="sruthi.kunju27@gmail.com" />
                                <InfoRow label="Address" value="sruthilayam grinagar second street akathethara palakkad" />
                                <InfoRow label="Pin Code" value="678008" />
                                <InfoRow label="Parent / Spouse Name" value="Dayanandan.N" />
                                <InfoRow label="Parent / Spouse No" value="8089330835" />
                                <InfoRow label="Emergency Contact No" value="8304942932" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section: ID Proofs */}
                <div className="mt-10">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-sm font-bold text-gray-700">ID Proofs</h4>
                        <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded transition-colors">
                            Add ID Proof
                        </button>
                    </div>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-xs text-gray-600">
                            <thead className="bg-gray-100 text-gray-700 font-semibold border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-3">Name of ID Proof</th>
                                    <th className="px-4 py-3">ID No.</th>
                                    <th className="px-4 py-3">Scanned Copy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-8 text-center text-gray-400" colSpan="3">
                                        No ID proofs added yet
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </>
  );
}

// Helper Component for the rows
function InfoRow({ label, value }) {
    return (
        <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{label}</span>
            <span className="text-sm text-gray-800 font-medium mt-0.5 break-words">{value}</span>
        </div>
    );
}