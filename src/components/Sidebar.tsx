import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';

// --- Data Structure ---
interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const articleLinks: NavItem[] = [
  { label: 'Current topics', href: '/articles/current-topics', children: [] },
  { label: 'Republic of Namibia', href: '/articles/republic-of-namibia', children: [] },
  { label: 'Legal advice', href: '/articles/legal-advice', children: [] },
  { label: 'Consumer protection', href: '/articles/consumer-protection', children: [] },
  { label: 'Environment protection', href: '/articles/environment-protection', children: [] },
  { label: 'Cyber security', href: '/articles/cyber-security', children: [] },
  { label: 'Registers and databases', href: '/articles/registers-and-databases', children: [] },
];

const citizenLinks: NavItem[] = [
    { label: 'Health services', href: '/citizen/health', children: [] },
    { label: 'Social protection services', href: '/citizen/social', children: [] },
    { label: 'Home affairs services', href: '/citizen/home', children: [] },
    { label: 'Work and labor relations', href: '/citizen/work', children: [] },
    { label: 'Citizenship and documents', href: '/citizen/documents', children: [] },
    { label: 'NaTIS', href: '/citizen/naTIS', children: [] },
    { label: 'Education', href: '/citizen/education', children: [] },
    { label: 'Money and property', href: '/citizen/money', children: [] },
    { label: 'Culture and Leisure', href: '/citizen/culture', children: [] },
    { label: 'Accommodation', href: '/citizen/accommodation', children: [] },
    { label: 'Security and defence', href: '/citizen/security', children: [] },
];

const entrepreneurLinks: NavItem[] = [
    { label: 'Business Registration', href: '/entrepreneur/registration', children: [] },
    { label: 'Intellectual Property', href: '/entrepreneur/intellectual-property', children: [] },
    { label: 'Procurement', href: '/entrepreneur/procurement', children: [] },
    { label: 'Compliance', href: '/entrepreneur/compliance', children: [] },
    { label: 'Waiver', href: '/entrepreneur/waiver', children: [] },
    { label: 'Good Standing', href: '/entrepreneur/good-standing', children: [] },
    { label: 'Law Reform', href: '/entrepreneur/law-reform', children: [] },
    { label: 'Taxes', href: '/entrepreneur/taxes', children: [] },
];

// --- Sub-components ---
const NewBadge: FC = () => (
  <span className="ml-auto bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
    NEW
  </span>
);

const CollapsibleMenu: FC<{ item: NavItem; isSubItem?: boolean }> = ({ item, isSubItem = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isExpandable = item.children && item.children.length > 0;

  if (isExpandable) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full px-4 py-2.5 text-left transition-colors duration-200 hover:bg-primary/20 focus:outline-none text-sm ${isSubItem ? 'text-gray-300 pl-8' : 'text-white'}`}
        >
          <span>{item.label}</span>
          <ChevronRight
            size={16}
            className={`transform transition-transform duration-200 text-gray-400 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="border-l border-gray-600 ml-6 my-1">
            {item.children?.map((child) => (
              <li key={child.label}>
                <CollapsibleMenu item={child} isSubItem={true} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.href || '#'}
      className={`flex items-center justify-between w-full px-4 py-2.5 text-left transition-colors duration-200 hover:bg-primary/20 focus:outline-none text-sm ${isSubItem ? 'text-gray-300 pl-8' : 'text-white'}`}
    >
      <span>{item.label}</span>
    </Link>
  );
};

const Section: FC<{ title: string; links: NavItem[] }> = ({ title, links }) => (
    <nav className="mt-8">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 px-4 mb-3 border-b border-gray-700 pb-2 mx-4">
            {title}
        </h2>
        <ul>
            {links.map((link) => (
                <li key={link.label}>
                    <CollapsibleMenu item={link} />
                </li>
            ))}
        </ul>
    </nav>
);

// --- Main Component ---
const Sidebar: FC<{ className?: string }> = ({ className = '' }) => {
  const mainDirectoryLinks: NavItem[] = [
    { label: 'General information', children: articleLinks },
    { label: 'Citizen', children: citizenLinks },
    { label: 'Entrepreneur', children: entrepreneurLinks },
  ];

  return (
    <aside className={`w-56 bg-primary-dark text-white shrink-0 shadow-xl border-t border-gray-700 overflow-y-auto ${className}`}>
      <div className="p-4 space-y-4">
        {/* SELF-SERVICE Section */}
        <div>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 px-1">
            SELF-SERVICE
          </h2>
          
          {/* Login Card (Text + Enter Button) */}
          <div className="rounded-md overflow-hidden shadow-sm">
            {/* Description Text */}
            <div className="bg-[#133A68] p-4">
              <p className="text-sm text-white leading-relaxed">
                Log in to the self-service environment to access your information and manage your services.
              </p>
            </div>
            {/* Enter Button */}
            <Link to="/login" className="flex items-center justify-between w-full px-4 py-3 bg-[#005AA3] hover:bg-[#004a87] transition-colors group">
              <span className="font-bold text-white text-sm">Enter</span>
              <ChevronRight size={18} className="text-white transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Service Catalogue Card */}
          <Link to="/catalog" className="flex items-center w-full px-4 py-3 mt-2 bg-[#133A68] hover:bg-[#1a4b85] transition-colors rounded-md shadow-sm group">
            <BookOpen size={20} className="mr-3 text-green-500" />
            <span className="flex-grow font-bold text-white text-sm">Service catalogue</span>
          </Link>
        </div>
      </div>

      <Section title="DIRECTORY" links={mainDirectoryLinks} />
      
      <div className="h-12"></div> {/* Bottom spacing */}
    </aside>
  );
};

export default Sidebar;