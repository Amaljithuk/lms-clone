import Header from "@/app/components/Header";

export default function AddFund() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Add Fund</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-[calc(100vh-140px)]">
            
            {/* Red Header */}
            <div className="bg-[#E15656] text-white px-6 py-4">
                <h3 className="text-lg font-medium">Add Fund</h3>
            </div>

            {/* Form Container */}
            <div className="p-8 max-w-3xl">
                <div className="space-y-6">
                    
                    {/* Batch Dropdown */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label className="w-32 text-sm font-semibold text-gray-700">Batch</label>
                        <select className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-red-400 bg-white">
                            <option>Select Batch</option>
                            <option>Data Science September 2025</option>
                            <option>Python July 2025-2</option>
                        </select>
                    </div>

                    {/* Amount Input */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label className="w-32 text-sm font-semibold text-gray-700">Amount</label>
                        <input 
                            type="number" 
                            placeholder="Amount" 
                            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-red-400"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-8 pt-4">
                        <button className="px-6 py-2 bg-red-300 text-white rounded text-sm hover:bg-red-400 transition-colors">
                            Cancel
                        </button>
                        <button className="px-6 py-2 bg-red-600 text-white rounded text-sm font-medium hover:bg-red-700 transition-colors shadow-sm">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </div>
      </main>
    </>
  );
}