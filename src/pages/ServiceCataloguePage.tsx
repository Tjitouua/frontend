import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, 
  List, 
  SlidersHorizontal, 
  ArrowRight, 
  ChevronDown, 
  Heart,
  ExternalLink,
  HandCoins,
  Globe,
  Palette,
  GraduationCap,
  Briefcase,
  Sprout,
  Landmark,
  HeartPulse,
  Users,
  Coins,
  FileText,
  Shield,
  Car,
  X
} from 'lucide-react';

// --- Types ---

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  isExternal?: boolean;
}

interface ServiceSection {
  id: string;
  title: string;
  items: ServiceItem[];
}

// --- Data ---

const CATEGORIES: ServiceCategory[] = [
  {
    id: 'benefits',
    title: 'Benefits, social services, pensions',
    description: 'Benefits and services related to social security, pensions, disability, welfare, and support for children and adults in need',
    icon: HandCoins
  },
  {
    id: 'citizenship',
    title: 'Citizenship, migration, services of foreign representatives',
    description: 'Topics related to migration, citizenship, travel and border crossing, and the services offered by Namibian foreign missions to citizens abroad',
    icon: Globe
  },
  {
    id: 'culture',
    title: 'Culture, sport, and leisure',
    description: 'Topics related to culture, sport, and leisure activities and participation',
    icon: Palette
  },
  {
    id: 'education',
    title: 'Education and research',
    description: 'Topics concerning learning and research – certificates and diplomas, exams, learning environments, counselling, grants and scholarships',
    icon: GraduationCap
  },
  {
    id: 'employment',
    title: 'Employment and employment relations',
    description: 'Work-related issues from the perspective of both the employee and the employer – working conditions, employment relations, safety at work, and working abroad',
    icon: Briefcase
  },
  {
    id: 'environment',
    title: 'Environment and agriculture',
    description: 'Topics related to the interaction between nature and humans, including agriculture, animal husbandry, veterinary medicine, nature conservation, moving in nature, and environmental awareness',
    icon: Sprout
  },
  {
    id: 'governance',
    title: 'Governance structures and communication channels',
    description: 'Contacts, services, and information channels of national structures – information portals, self-service environments, and representative offices and service points',
    icon: Landmark
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Services supporting health and well-being: health insurance, medical and welfare services, rehabilitation, and occupational health',
    icon: HeartPulse
  },
  {
    id: 'family',
    title: 'Me and my family',
    description: 'Everyday topics concerning you and your family – marriage, children, pets, inheritance, and managing family data',
    icon: Users
  },
  {
    id: 'money',
    title: 'Money, assets, and property',
    description: 'Topics concerning money and property – taxes, liabilities, debt counselling, real estate and property management',
    icon: Coins
  },
  {
    id: 'documents',
    title: 'My documents',
    description: 'Topics related to identity documents, permits, certificates, attestations, notarial documents, court decisions, and documents associated with electronic identity',
    icon: FileText
  },
  {
    id: 'security',
    title: 'Security and national defence',
    description: 'Topics related to security and national defence – personal safety, obligation to serve in the Defence Forces, and volunteering opportunities',
    icon: Shield
  },
  {
    id: 'traffic',
    title: 'Traffic and vehicles',
    description: 'Topics related to land, sea, and air traffic and means of transport – from road traffic to aviation and maritime transport',
    icon: Car
  }
];

const TABS = [
  { id: 'health', label: "Health" },
  { id: 'family', label: "Me and my family" },
  { id: 'money', label: "Money, assets, and property" },
  { id: 'documents', label: "My documents" },
  { id: 'security', label: "Security and national defence" },
  { id: 'traffic', label: "Traffic and vehicles" },
  { id: 'employment', label: "Employment and employment relations" },
  { id: 'environment', label: "Environment and agriculture" },
  { id: 'governance', label: "Governance structures and communication channels" },
  { id: 'contact', label: "Get in touch" }
];

const MOCK_SECTIONS: (ServiceSection & { categoryId: string })[] = [
  // Health
  {
    id: 'health-records',
    title: 'Health Records & Prescriptions',
    categoryId: 'health',
    items: [
      { id: 'h1', title: 'Digital prescriptions', description: 'View and manage your digital prescriptions' },
      { id: 'h2', title: 'Health history', description: 'Access your medical history and vaccination records' }
    ]
  },
  {
    id: 'insurance',
    title: 'Health Insurance',
    categoryId: 'health',
    items: [
      { id: 'h3', title: 'Insurance status', description: 'Check your current health insurance validity' },
      { id: 'h4', title: 'AHIC application', description: 'Apply for Health Insurance Card', isExternal: true }
    ]
  },
  
  // Family
  {
    id: 'allowances',
    title: 'Allowances, scholarships, grants',
    categoryId: 'family',
    items: [
      { id: 's1', title: 'Child allowance', description: 'Apply for monthly child support payments' },
      { id: 's2', title: 'Single parent support', description: 'Financial aid for single parents' }
    ]
  },
  {
    id: 'events',
    title: 'Life Events',
    categoryId: 'family',
    items: [
      { id: 'f1', title: 'Register a birth', description: 'Register a newborn and name your child' },
      { id: 'f2', title: 'Marriage application', description: 'Submit an application for marriage' }
    ]
  },

  // Money
  {
    id: 'tax',
    title: 'Taxes & Duties',
    categoryId: 'money',
    items: [
      { id: 'm1', title: 'Income tax return', description: 'File your annual personal income tax return', isExternal: true },
      { id: 'm2', title: 'Land tax query', description: 'View land tax obligations and payments' }
    ]
  },

  // Documents
  {
    id: 'identity',
    title: 'Identity Documents',
    categoryId: 'documents',
    items: [
      { id: 'd1', title: 'Passport renewal', description: 'Apply for a new passport or renew existing one' },
      { id: 'd2', title: 'ID card status', description: 'Check the status of your ID card application' }
    ]
  },
  {
    id: 'certificates',
    title: 'Certificates & Notary',
    categoryId: 'documents',
    items: [
      { id: 'd3', title: 'Criminal record check', description: 'Order a certificate of good conduct' },
      { id: 'd4', title: 'Notary appointments', description: 'Book a time with a public notary' }
    ]
  },

  // Traffic
  {
    id: 'driving',
    title: 'Driving & Licenses',
    categoryId: 'traffic',
    items: [
      { id: 't1', title: 'Driver\'s license', description: 'Renew or replace your driver\'s license' },
      { id: 't2', title: 'Theory test', description: 'Register for driving theory examination' }
    ]
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    categoryId: 'traffic',
    items: [
      { id: 't3', title: 'Vehicle registration', description: 'Change ownership or register a vehicle' },
      { id: 't4', title: 'Technical inspection', description: 'Check technical inspection validity' }
    ]
  },

  // Education (Employment tab for now, or add Education tab)
  {
    id: 'exams',
    title: 'Exams, tests',
    categoryId: 'employment', 
    items: [
      { id: 's5', title: 'Professional exams', description: 'Register for professional qualification exams' }
    ]
  },
  
  // Governance
  {
    id: 'portals',
    title: 'Information portals',
    categoryId: 'governance',
    items: [
      { id: 'g1', title: 'Public registers', description: 'Access various public national registers', isExternal: true }
    ]
  }
];

// --- Component ---

const ServiceCataloguePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'areas' | 'all'>('areas');
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'health-records': true,
    'allowances': true,
    'tax': true,
    'identity': true,
    'driving': true
  });
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleFavorite = (e: React.MouseEvent, serviceId: string) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const filteredSections = MOCK_SECTIONS.filter(section => section.categoryId === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Filter Sidebar Panel */}
      {isFilterOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsFilterOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-[140px] bottom-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-text-heading">Filter Services</h2>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-red-50 rounded-full transition-colors text-gray-500 hover:text-red-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {/* Search Filter */}
              <div>
                <label className="block text-sm font-semibold text-text-heading mb-2">Search keywords</label>
                <input 
                  type="text" 
                  placeholder="e.g. passport, tax..." 
                  className="w-full border border-secondary-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>

              {/* Topic Filter */}
              <div>
                <h3 className="text-sm font-bold text-text-heading mb-3 uppercase tracking-wider">Topic</h3>
                <div className="space-y-3">
                  {['Health', 'Family', 'Money', 'Education', 'Employment', 'Traffic'].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer h-5 w-5 border-2 border-gray-300 rounded text-primary focus:ring-primary/20 cursor-pointer transition-all checked:border-primary checked:bg-primary" />
                      </div>
                      <span className="text-text group-hover:text-primary transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Service Provider Filter */}
              <div>
                <h3 className="text-sm font-bold text-text-heading mb-3 uppercase tracking-wider">Service Provider</h3>
                <div className="space-y-3">
                  {['Ministry of Home Affairs', 'NamRA', 'SSC', 'BIPA', 'NAMFISA'].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer h-5 w-5 border-2 border-gray-300 rounded text-primary focus:ring-primary/20 cursor-pointer transition-all checked:border-primary checked:bg-primary" />
                      </div>
                      <span className="text-text group-hover:text-primary transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-gray-100 flex gap-3">
                <button 
                  className="flex-1 py-2.5 border border-secondary-border text-text font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Clear all
                </button>
                <button 
                  className="flex-1 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Show results
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Breadcrumb */}
      <nav className="text-sm text-text-muted mb-4 flex items-center gap-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <span className="font-medium text-text-heading">Service catalogue</span>
      </nav>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-heading mb-3">Service catalogue</h1>
        <p className="text-base text-text max-w-4xl leading-relaxed">
          The service catalogue aggregates a selection of e-services and information sources related to these services, and offers personalised service recommendations to users after login.
        </p>
      </div>

      {/* View Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-2 bg-secondary p-1 rounded-full sm:p-0 sm:bg-transparent">
          <button
            onClick={() => setViewMode('areas')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-200 ${
              viewMode === 'areas'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-secondary-card border border-secondary-border text-text hover:bg-secondary-hover'
            }`}
          >
            <LayoutGrid size={18} />
            <span className="font-semibold text-sm">Areas</span>
          </button>
          
          <button
            onClick={() => setViewMode('all')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-200 ${
              viewMode === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-secondary-card border border-secondary-border text-text hover:bg-secondary-hover'
            }`}
          >
            <List size={18} />
            <span className="font-semibold text-sm">All services</span>
          </button>
        </div>

        {viewMode === 'all' && (
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium px-4 py-2 rounded-full hover:bg-primary-light animate-in fade-in slide-in-from-right-4 duration-300"
          >
            <SlidersHorizontal size={18} />
            <span>Open filter</span>
          </button>
        )}
      </div>

      {/* VIEW 1: AREAS */}
      {viewMode === 'areas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id}
              to={`/catalog/category/${category.id}`}
              className="group bg-secondary-card border border-secondary-border rounded-lg p-8 shadow-card hover:shadow-card-hover hover:border-primary-light transition-all duration-300 cursor-pointer relative flex flex-col min-h-[240px] overflow-hidden text-left"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-text line-clamp-3 mb-12 leading-relaxed">
                  {category.description}
                </p>
              </div>
              
              {/* Background Transparent Icon */}
              <div className="absolute bottom-[-10px] left-[-10px] text-primary opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none">
                <category.icon size={140} strokeWidth={1.5} />
              </div>

              <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white opacity-90 group-hover:bg-primary-dark group-hover:scale-110 transition-all duration-300 shadow-md z-20">
                <ArrowRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* VIEW 2: ALL SERVICES */}
      {viewMode === 'all' && (
        <div className="animate-in fade-in duration-300">
          {/* Horizontal Tabs */}
          <div className="mb-8 border-b border-secondary-border">
            <div className="flex gap-6 overflow-x-auto pb-0 scrollbar-hide -mb-px">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-2 px-4 text-base font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-text-muted hover:text-text-heading hover:border-secondary-border'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-4">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <div key={section.id} className="border-b border-secondary-border last:border-0 pb-4">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center py-4 text-left group hover:bg-secondary -mx-2 px-4 rounded-lg transition-colors"
                    aria-expanded={expandedSections[section.id]}
                  >
                    <span className="font-bold text-text-heading text-lg group-hover:text-primary transition-colors">
                      {section.title}
                    </span>
                    <ChevronDown 
                      className={`text-text-muted transition-transform duration-200 ${
                        expandedSections[section.id] ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </button>

                  {expandedSections[section.id] && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 animate-in slide-in-from-top-2 duration-200">
                      {section.items.map((item) => (
                        <div 
                          key={item.id}
                          className="flex justify-between items-start p-4 rounded-lg border border-transparent hover:border-secondary-border hover:bg-secondary-card hover:shadow-sm cursor-pointer transition-all duration-200 group/item relative"
                        >
                          <Link 
                            to={`/service/${item.id}`}
                            className="flex-1 pr-4"
                          >
                            <h4 className="text-primary font-medium mb-1 group-hover/item:text-primary-dark flex items-center gap-1">
                              {item.title}
                              {item.isExternal && <ExternalLink size={14} className="text-text-muted" />}
                            </h4>
                            <p className="text-sm text-text-muted">{item.description}</p>
                          </Link>
                          <button
                            onClick={(e) => toggleFavorite(e, item.id)}
                            className="p-1 hover:bg-white rounded-full transition-colors z-10"
                            aria-label={favorites[item.id] ? "Remove from favorites" : "Add to favorites"}
                          >
                            <Heart 
                              size={20} 
                              className={`transition-colors duration-200 ${
                                favorites[item.id] 
                                  ? 'fill-red-500 text-red-500' 
                                  : 'text-gray-300 hover:text-red-500'
                              }`} 
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-text-muted bg-secondary-card rounded-lg border border-secondary-border border-dashed">
                <p className="text-lg font-medium">No services found for this category yet.</p>
                <p className="text-sm mt-2">Try selecting another category or check back later.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCataloguePage;
