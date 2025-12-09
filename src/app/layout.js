"use client"; 
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <title>Techmindz LMS</title>
      <body className={inter.className}>
        <div className="flex h-screen w-full bg-[#f3f4f6] overflow-hidden">
          
          {/* Sidebar Container */}
          {/* Mobile: Fixed overlay. Desktop: Relative block */}
          <div className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-black transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
             <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>

          {/* Mobile Overlay (Dark background when menu is open) */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          {/* Main Content */}
          <div className="flex flex-col flex-1 h-full overflow-hidden relative w-full">
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}