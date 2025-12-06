import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techmindz LMS",
  description: "LMS Clone Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main Wrapper: Flex container that takes full screen height */}
        <div className="flex h-screen w-full bg-[#f3f4f6]">
          
          {/* Sidebar: Fixed width, doesn't shrink */}
          <div className="flex-shrink-0 w-64 h-full">
            <Sidebar />
          </div>

          {/* Main Content Area: Grows to fill remaining space */}
          <div className="flex flex-col flex-1 h-full overflow-hidden">
            {/* The Header and Page Content will go here */}
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}