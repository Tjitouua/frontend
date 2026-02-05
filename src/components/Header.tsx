import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import CoatOfArms from '../assets/Coat_of_Arms.png';

export interface HeaderProps {
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen: externalIsOpen, onMobileMenuToggle }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isMenuOpen = externalIsOpen ?? internalIsOpen;
  const toggleMenu = onMobileMenuToggle ?? (() => setInternalIsOpen(!internalIsOpen));

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const TopLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    const isSpecialLink = to === '/citizen' || to === '/entrepreneur';
    
    return (
      <div className="relative h-full flex items-center">
        <Link to={to} className={`px-2 hover:text-white transition-colors duration-200 ${isActive ? 'font-semibold text-white' : 'text-gray-300'}`}>
          {children}
        </Link>
        {/* White triangle at the bottom pointing up towards the text */}
        {isActive && isSpecialLink && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"></div>
        )}
      </div>
    );
  };

  return (
    <header className="relative z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-dark text-sm">
        <div className="grid h-11 grid-cols-3 items-center px-8">
          {/* Left Nav */}
          <nav className="flex items-center gap-6 justify-self-start h-full">
            <TopLink to="/">Home</TopLink>
            <TopLink to="/accessibility">Accessibility</TopLink>
          </nav>
          {/* Center Nav */}
          <nav className="flex items-center gap-6 justify-self-center h-full">
            <TopLink to="/citizen">Citizen</TopLink>
            <TopLink to="/entrepreneur">Entrepreneur</TopLink>
          </nav>
          {/* Right Language Selector */}
          <div className="inline-flex items-center justify-self-end relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-2 px-3 py-2 transition-all duration-200 rounded-t-md select-none border border-transparent w-full justify-between ${
                isLangOpen 
                  ? 'bg-white text-primary border-gray-100 border-b-white relative z-30' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1">
                <span className={isLangOpen ? 'text-primary' : ''}>Language:</span>
                <span className={`font-semibold ${isLangOpen ? 'text-primary' : 'text-white'}`}>ENG</span>
              </div>
              {isLangOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Dropdown Panel */}
            {isLangOpen && (
              <div className="absolute left-0 top-full w-full bg-white text-gray-800 shadow-xl rounded-b-md border border-gray-100 z-20 animate-in fade-in zoom-in-95 duration-100 overflow-hidden -mt-px">
                <div className="flex flex-col">
                   <button className="text-left px-3 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span className="font-bold text-primary">English</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>Afrikaans</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>Oshiwambo</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>Khoekhoegowab</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>Otjiherero</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>RuKwangali</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>Silozi</span>
                   </button>
                   <button className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex flex-col border-l-2 border-transparent hover:border-primary">
                      <span>German</span>
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex h-24 items-center justify-between px-8">
        {/* Left: Logo and Title */}
        <Link to="/" className="flex items-center gap-3">
          <img src={CoatOfArms} alt="Namibian Coat of Arms" className="h-14" />
          <div>
            <span className="block text-sm font-semibold text-primary-dark">NATIONAL</span>
            <span className="block text-sm font-bold text-primary-dark">PORTAL</span>
          </div>
        </Link>

        {/* Center: Search Bar (hidden on mobile) */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-lg group">
            <input
              type="search"
              placeholder="Enter a search term"
              className="w-full rounded-full border border-gray-300 bg-white py-2.5 pl-6 pr-12 text-gray-700 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-400 shadow-sm"
            />
            <button className="absolute inset-y-1 right-1 flex w-10 h-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark shadow-sm">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right: Login Button (hidden on mobile) */}
        <div className="hidden md:flex items-center">
          <Link to="/login" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md">
            Log into self-service
          </Link>
        </div>

        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary-dark">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-secondary py-4 px-4 md:hidden">
          <div className="relative mb-4 w-full">
             <input
              type="search"
              placeholder="Enter a search term"
              className="w-full rounded-full border border-primary/50 bg-transparent py-2.5 pl-5 pr-14 text-text-heading transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="absolute inset-y-1 right-1 flex w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark">
              <Search size={20} />
            </button>
          </div>
          <Link to="/login" className="block w-full rounded-full bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md">
            Log into self-service
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;