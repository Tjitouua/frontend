import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Header */}
      <div className="z-50 w-full bg-white shadow-sm relative">
        <Header 
          isMobileMenuOpen={isSidebarOpen} 
          onMobileMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
      </div>

      <div className="flex flex-1 relative max-w-[1920px] mx-auto w-full">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden lg:block shrink-0">
           <Sidebar className="min-h-full" />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={() => setIsSidebarOpen(false)}
            />
            {/* Sidebar Panel */}
            <div className="absolute left-0 top-0 bottom-0 w-56 bg-primary-dark shadow-2xl transform transition-transform duration-300 ease-in-out">
              <Sidebar className="h-full pt-20" /> {/* pt-20 to clear header if needed, though header is z-50 */}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;