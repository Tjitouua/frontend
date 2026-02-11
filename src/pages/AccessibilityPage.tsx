import React, { useRef } from 'react';
import { Heart, MessageSquare, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Card from '../components/Card';
import FeedbackSection from './accessibility/components/FeedbackSection';
import { 
  AccessibilityIntro, 
  KeyboardNavigation, 
  ZoomingSection, 
  ScreenReaderSection, 
  ReferencesSection 
} from './accessibility/components/AccessibilitySections';

const AccessibilityPage: React.FC = () => {
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex w-full bg-gray-50/50 min-h-screen font-sans">
      <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link to="/help" className="hover:text-primary transition-colors">General assistance</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-primary font-medium">Accessibility guide</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl font-light text-gray-900 mb-8">Accessibility guide</h1>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <button className="flex items-center gap-2 text-[#0055E6] text-sm font-semibold hover:underline transition-all group">
                <Heart size={18} className="group-hover:fill-blue-600 transition-colors" />
                Add to favourites
              </button>
              
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Last modified: 14.11.2025
              </div>
            </div>

            <Card className="mb-12 !p-0 overflow-hidden border-none shadow-sm">
              <div className="p-8 space-y-12">
                <AccessibilityIntro />
                <KeyboardNavigation />
                <ZoomingSection />
                <ScreenReaderSection />
                <ReferencesSection />
              </div>
            </Card>

            {/* Satisfaction Rating & Feedback Form */}
            <FeedbackSection feedbackRef={feedbackRef} />
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-8 space-y-8">
            
            {/* Table of Contents Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">CONTENTS</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-5 bg-[#0055E6] rounded-full mt-0.5" />
                  <a href="#" className="text-sm font-bold text-gray-900 hover:text-[#0055E6] transition-colors">
                    Accessibility guide
                  </a>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l border-gray-100 ml-0.5">
                  <a href="#" className="text-sm text-gray-600 hover:text-[#0055E6] transition-colors">
                    Accessibility
                  </a>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l border-gray-100 ml-0.5">
                  <a href="#" className="text-sm text-gray-600 hover:text-[#0055E6] transition-colors">
                    Keyboard navigation
                  </a>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l border-gray-100 ml-0.5">
                  <a href="#" className="text-sm text-gray-600 hover:text-[#0055E6] transition-colors">
                    Zooming
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Quick Actions */}
            <div className="px-2">
              <button 
                onClick={scrollToFeedback}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#0055E6] font-medium transition-colors group w-full text-left"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <MessageSquare size={18} className="text-gray-500 group-hover:text-[#0055E6]" />
                </div>
                Give feedback on the article
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default AccessibilityPage;