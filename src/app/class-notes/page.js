// import Header from "@/app/components/Header";

export default function ClassNotes() {
  const notes = [
    { 
      title: "Data science", 
      batch: "Data Science September 2025", 
      stats: [
        { label: "Total", value: "0" }
      ]
    },
    { 
      title: "Python Core", 
      batch: "Python July 2025-2", 
      stats: [
        { label: "Total", value: "0" }
      ]
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="mb-6">
           <h2 className="text-2xl font-semibold text-gray-800">Classnotes</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
            {/* Red Header */}
            <div className="bg-[#E15656] text-white px-6 py-4">
                <h3 className="text-lg font-medium">Classnotes</h3>
            </div>

            {/* Cards Grid */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {notes.map((item, index) => (
                    <div key={index} className="bg-[#0088CC] rounded-xl p-6 text-white shadow-md w-full max-w-md">
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-xs text-blue-100 mb-6">{item.batch}</p>
                        
                        <div className="flex justify-start text-center">
                            {item.stats.map((stat, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-xs text-blue-100 font-medium">{stat.label}</span>
                                    <span className="text-xl font-bold">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </>
  );
}