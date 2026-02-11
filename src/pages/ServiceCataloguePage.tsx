import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, 
  List, 
  SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types & Constants
import { ServiceSection as IServiceSection } from './service-catalogue/types';
import { CATEGORIES, TABS } from './service-catalogue/constants';

// Components
import FilterSidebar from './service-catalogue/components/FilterSidebar';
import CategoryCard from './service-catalogue/components/CategoryCard';
import ServiceSection from './service-catalogue/components/ServiceSection';

const MOCK_SECTIONS: IServiceSection[] = [
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
  }
];

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
    <div className="w-full bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Service catalogue</span>
        </nav>

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Service catalogue</h1>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
            The service catalogue aggregates a selection of e-services and information sources related to these services, and offers personalised service recommendations to users after login.
          </p>
        </div>

        {/* View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div className="flex items-center gap-1 bg-white p-1 rounded-full shadow-sm border border-gray-100">
            <button
              onClick={() => setViewMode('areas')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${
                viewMode === 'areas'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LayoutGrid size={18} />
              <span className="font-bold text-sm">Areas</span>
            </button>
            
            <button
              onClick={() => setViewMode('all')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${
                viewMode === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List size={18} />
              <span className="font-bold text-sm">All services</span>
            </button>
          </div>

          {viewMode === 'all' && (
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-primary hover:bg-white hover:shadow-sm transition-all font-bold px-6 py-2.5 rounded-full border border-primary/10"
            >
              <SlidersHorizontal size={18} />
              <span>Open filter</span>
            </button>
          )}
        </div>

        {/* VIEW 1: AREAS */}
        <AnimatePresence mode="wait">
          {viewMode === 'areas' && (
            <motion.div 
              key="areas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {CATEGORIES.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </motion.div>
          )}

          {/* VIEW 2: ALL SERVICES */}
          {viewMode === 'all' && (
            <motion.div 
              key="all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Horizontal Tabs */}
              <div className="mb-10 border-b border-gray-100 overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 -mb-px min-w-max">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`whitespace-nowrap py-4 px-1 text-base font-bold transition-all duration-300 border-b-2 ${
                        activeTab === tab.id
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collapsible Sections */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="space-y-2">
                  {filteredSections.length > 0 ? (
                    filteredSections.map((section) => (
                      <ServiceSection 
                        key={section.id}
                        section={section}
                        isExpanded={expandedSections[section.id]}
                        onToggle={() => toggleSection(section.id)}
                        favorites={favorites}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))
                  ) : (
                    <div className="py-20 text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <List size={32} className="text-gray-300" />
                      </div>
                      <p className="text-xl font-bold text-gray-900">No services found</p>
                      <p className="text-gray-500 mt-2">Try selecting another category or check back later.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceCataloguePage;