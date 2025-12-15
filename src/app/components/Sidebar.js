"use client";
import Link from 'next/link';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, BookOpen, MonitorPlay, Calendar, 
  NotebookPen, FileText, FolderGit2, Laptop, 
  Wallet, MessageSquare, User, LogOut, X
} from 'lucide-react';

const Sidebar = ({ onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Classroom Sessions', icon: MonitorPlay, path: '/sessions' },
    { name: 'Timetable', icon: Calendar, path: '/timetable' },
    { name: 'Class Notes', icon: NotebookPen, path: '/class-notes' },
    { name: 'Assignments', icon: FileText, path: '/assignments' },
    { name: 'Projects', icon: FolderGit2, path: '/projects' },
    { name: 'Online Exams', icon: Laptop, path: '/online-exams' },
    { name: 'Add Fund', icon: Wallet, path: '/add-fund' },
    { name: 'Payments', icon: Wallet, path: '/payments' },
    { name: 'Feedbacks', icon: MessageSquare, path: '/feedbacks' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <div className="h-full bg-black text-white flex flex-col overflow-y-auto custom-scrollbar relative">
      
      {/* Close Button (Mobile Only) */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white lg:hidden"
      >
        <X size={24} />
      </button>

      {/* Logo */}
      {/* <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wide">
          Techmindz<span className="text-xs align-top text-gray-400">®</span>
        </h1>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Embrace the future</p>
      </div> */}
            <div className="p-6 border-b border-gray-800 flex justify-center bg-[#00629b]">
        {/* Adjust width/height as needed to fit your specific logo.png */}
        <Image 
          src="/logo.png" 
          alt="Techmindz Logo" 
          width={100} 
          height={20}
          className="object-contain transform scale-200"  // Keeps aspect ratio
          priority
        />
        {/* Remove the Image component temporarily and use a standard img tag to test */}
{/* <img 
  src="/logo.png" 
  alt="Techmindz Logo" 
  className="w-32 h-auto object-contain"
/> */}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={index} 
              href={item.path}
              onClick={onClose} // Close sidebar on mobile when link clicked
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all
                ${isActive 
                  ? 'bg-gray-800 text-white border-r-4 border-red-500' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:border-r-4 hover:border-red-500'
                }`}
            >
              <item.icon size={18} strokeWidth={1.5} className={isActive ? "text-red-400" : ""} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-gray-800">
        <button className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;