import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ChevronRight, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import coatOfArms from '../assets/Coat_of_Arms.png';
import auFlag from '../assets/african union.png';
import namFlag from '../assets/namibia-waving-flag.png';

const FooterLink: FC<{ to: string; text: string }> = ({ to, text }) => (
  <li className="group">
    <Link 
      to={to} 
      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 ease-in-out py-1"
    >
      <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 opacity-0 group-hover:opacity-100 text-blue-400">
        <ChevronRight size={14} />
      </span>
      <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium">
        {text}
      </span>
    </Link>
  </li>
);

const Footer: FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0D2244] to-[#08162e] text-white font-sans">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 max-w-7xl pt-8 pb-6">
        
        {/* Floating To Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-6 lg:right-12 z-50 flex items-center justify-center p-3 bg-white border border-[#0055E6] text-[#0055E6] rounded-full hover:bg-[#0055E6] hover:text-white transition-all duration-300 shadow-lg transform ${
            showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Branding & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <img src={coatOfArms} alt="Namibian Coat of Arms" className="h-14 w-auto object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">Republic of Namibia</span>
                <span className="text-white text-base font-bold tracking-tight leading-tight">National Portal</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Your gateway to government services, information, and digital resources.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider relative inline-block">
              National Portal
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#0055E6] rounded-full"></span>
            </h3>
            <ul className="space-y-0.5">
              <FooterLink to="/about" text="About the Portal" />
              <FooterLink to="/terms" text="Terms of Use" />
              <FooterLink to="/accessibility" text="Accessibility" />
              <FooterLink to="/cookies" text="Privacy & Cookies" />
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider relative inline-block">
              Support
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#0055E6] rounded-full"></span>
            </h3>
            <ul className="space-y-0.5">
              <FooterLink to="/self-service" text="Service Owner Login" />
              <FooterLink to="/faq" text="Help Center (FAQ)" />
              <FooterLink to="/feedback" text="Submit Feedback" />
              <FooterLink to="/contact" text="Contact Us" />
            </ul>
          </div>
          
          {/* Column 4: Connect & Flags */}
          <div className="flex flex-col gap-4">
             {/* Flags */}
             <div className="pt-1">
               <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg w-fit">
                 <img src={namFlag} alt="Namibia Flag" className="h-6 w-auto shadow-sm" title="Republic of Namibia" />
                 <div className="w-px h-4 bg-gray-600"></div>
                 <img src={auFlag} alt="African Union Flag" className="h-6 w-auto shadow-sm" title="African Union" />
               </div>
             </div>

             {/* Socials */}
             <div>
                <h3 className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Connect with us</h3>
                <div className="flex items-center gap-2.5">
                  <a href="#" className="bg-white/10 hover:bg-[#1877F2] p-2 rounded-full text-white transition-all duration-300 hover:scale-110">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#FF0000] p-2 rounded-full text-white transition-all duration-300 hover:scale-110">
                    <Youtube size={16} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-green-600 p-2 rounded-full text-white transition-all duration-300 hover:scale-110">
                    <Mail size={16} />
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#050e1f] border-t border-white/5">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
          <p>© {new Date().getFullYear()} Republic of Namibia. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-2 md:mt-0">
            <span className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              Development Mode
            </span>
            <span className="text-gray-600">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;