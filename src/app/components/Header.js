import { Bell, MessageCircle, Menu, Search } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white h-16 flex items-center justify-between px-6 shadow-sm border-b border-gray-200 flex-shrink-0 z-10">
      
      {/* Left Side: Hamburger & Search */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu - Visible on Mobile only */}
        <button 
          onClick={onMenuClick}
          className="text-gray-500 hover:text-gray-700 lg:hidden focus:outline-none"
        >
          <Menu size={24} />
        </button>

        {/* Search bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1.5 border border-gray-200 w-64">
           <Search size={14} className="text-gray-400 mr-2"/>
           <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm text-gray-600 w-full" />
        </div>
      </div>

      {/* Right Side: Icons & Profile */}
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
           <Bell className="text-gray-500 hover:text-gray-700" size={20} />
           <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-700">
           <MessageCircle size={20} />
           <span className="text-xs font-medium hidden sm:block">Chat</span>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-300 pl-6 ml-2">
          <div className="text-right hidden md:block leading-tight">
            <p className="text-sm font-semibold text-gray-800">Sruthi Dayanandan</p>
            <p className="text-[11px] text-gray-500">Student</p>
          </div>
          <div className="h-9 w-9 bg-red-50 rounded-full flex items-center justify-center border border-red-100 relative">
             <img 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sruthi" 
               alt="User" 
               className="h-7 w-7 rounded-full"
             />
             <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;