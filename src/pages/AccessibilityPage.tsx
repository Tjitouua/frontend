import React, { useRef } from 'react';
import { Heart, MessageSquare, ExternalLink, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessibilityPage: React.FC = () => {
  const [rating, setRating] = React.useState<number>(0);
  const [selectedKeywords, setSelectedKeywords] = React.useState<string[]>([]);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setSelectedKeywords([]); // Reset keywords when rating changes
  };

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword) 
        ? prev.filter(k => k !== keyword) 
        : [...prev, keyword]
    );
  };

  const getRatingLabel = (r: number) => {
    switch (r) {
      case 1: return 'I was completely unsatisfied';
      case 2: return 'I was somewhat unsatisfied';
      case 3: return 'Partially satisfied';
      case 4: return 'I was somewhat satisfied';
      case 5: return 'I was very satisfied';
      default: return '';
    }
  };

  const getChips = (r: number) => {
    if (r <= 2) {
      return [
        'I did not find the answer',
        'Missing information',
        'Complicated wording',
        'Incorrect information',
        'Other reason'
      ];
    } else if (r === 3) {
      return [
        'I partly found the answer',
        'Superficial information',
        'Complex wording in places',
        'Partially incorrect information',
        'Other reason'
      ];
    } else {
      return [
        'I found what I was looking for',
        'Comprehensive information',
        'Simple wording',
        'Correct information',
        'Other reason'
      ];
    }
  };

  return (
    <div className="flex w-full bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Main Content Area */}
        <div className="flex-1 bg-white p-8 rounded-sm shadow-sm border border-gray-100">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#0055E6] mb-6">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link to="/general-assistance" className="hover:underline">General assistance</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-500">Accessibility guide</span>
          </nav>

          <h1 className="text-3xl font-normal text-gray-800 mb-8">Accessibility guide</h1>

          {/* Add to favourites */}
          <button className="flex items-center gap-2 text-[#0055E6] text-sm font-semibold mb-6 hover:underline">
            <Heart size={18} />
            Add to favourites
          </button>

          {/* Last Modified */}
          <div className="bg-gray-50 p-3 text-sm text-gray-600 mb-8">
            Last modified 14.11.2025
          </div>

          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            {/* Accessibility Section */}
            <section>
              <h2 className="text-2xl font-normal text-gray-800 mb-4">Accessibility</h2>
              <p className="mb-4">
                This website is developed according to international accessibility standards{' '}
                <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
                  WCAG 2.1 AA <ExternalLink size={14} />
                </a>. 
                This means that special technologies and processes have been used to make the content more 
                accessible for people with disabilities in the Republic of Namibia.
              </p>
              <p className="mb-4">
                In addition, better accessibility can be achieved by configuring some browser and operation system tools. 
                This page provides information about those possibilities.
              </p>
              <p>
                If you have any questions or encounter accessibility barriers, please contact us at:{' '}
                <a href="mailto:support@ecitizen.gov.na" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
                  support@ecitizen.gov.na <ExternalLink size={14} />
                </a>.
              </p>
            </section>

            {/* Keyboard-only navigation */}
            <section>
              <h2 className="text-2xl font-normal text-gray-800 mb-4">Keyboard-only navigation</h2>
              <p className="mb-4">
                This website allows visitors to navigate using only the keyboard. Navigation works by pressing the Tab 
                key repeatedly. Every keypress brings the focus to a next element, ie. link or a button. The element 
                currently in focus is highlighted by a color change and a framed box around it. To activate this element 
                (i.e. "click on it"), press the Enter key.
              </p>
            </section>

            {/* Zooming in and out */}
            <section>
              <h2 className="text-2xl font-normal text-gray-800 mb-4">Zooming in and out</h2>
              <p className="mb-6">
                There are three main ways to zoom in on a webpage - using your browser built-in capabilities, using your 
                OS built-in capabilities, or installing a special plug-in for the browser. Our recommendation is to use the 
                easiest way - browser built-in zoom.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">With a browser</h3>
                  <p className="mb-2">
                    All popular browsers allow zooming in and out by pressing the Ctrl (Cmd in OS X) and + or – keys.
                  </p>
                  <p>
                    Or alternatively, hold down the Ctrl key and scroll up or down with the mouse.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">In your operating system</h3>
                  <p className="mb-4">
                    <strong>Windows</strong> includes "Magnifier", a program that allows zooming. Press the "Start" menu, type "Magnifier" 
                    (first letters should do it) and press Enter. A small overlay window appears that can be moved around 
                    with the mouse and zooms everything in it.
                  </p>
                  <p>
                    In <strong>Apple</strong> computers, go Apple menu -&gt; System Preferences -&gt; Accessibility (or Universal Access) -&gt; 
                    Zoom.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Browser plug-ins</h3>
                  <p>
                    Browsers have plug-ins that extend the zooming capabilities. Example,{' '}
                    <a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
                      Zoom Page WE <ExternalLink size={14} />
                    </a> for Firefox, and{' '}
                    <a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
                      Zoom for Google Chrome <ExternalLink size={14} />
                    </a> for Chrome.
                  </p>
                </div>
              </div>
            </section>

            {/* Using a screen reader */}
            <section>
              <h2 className="text-2xl font-normal text-gray-800 mb-4">Using a screen reader</h2>
              <p className="mb-4">
                A screen reader is a software application that attempts to identify and interpret what is being displayed 
                on the screen. This interpretation is then re-presented to the user with text-to-speech, sound icons, or a 
                Braille output device.
              </p>
              <p className="mb-4">
                The content of this website is created in accordance with the screen reader technical standards. For 
                example, pictures have Alt tags, special text-based descriptions; video windows have textual descriptions 
                about whats happening on the screen; structural elements are placed and ordered so that the order of the 
                information read by the screen reader is logical and easy to follow.
              </p>
              <p className="mb-4 text-sm">A choice of popular screen readers:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                <li><a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">JAWS <ExternalLink size={12} /></a> (Windows)</li>
                <li>VoiceOver (OS X, free, built-in)</li>
                <li><a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">NVDA <ExternalLink size={12} /></a> (Windows, free)</li>
                <li>Narrator (Windows, built-in)</li>
              </ul>
            </section>

            {/* References */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-xl font-normal text-gray-800 mb-4">References</h2>
              <a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
                Accessibility notice <ExternalLink size={14} />
              </a>
            </section>
          </div>

          {/* Satisfaction Rating & Feedback Form */}
          <div ref={feedbackRef} className="mt-12 pt-8 border-t border-gray-100 bg-[#F8F9FA] -mx-8 px-8 pb-12">
            <div className="max-w-2xl mx-auto">
              <p className="text-[17px] font-semibold text-gray-800 mb-2 text-center">
                How satisfied were you with the content of the page?
              </p>
              
              <div className="flex justify-center gap-1.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={32} 
                    onClick={() => handleRatingChange(star)}
                    className={`cursor-pointer transition-colors ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              {rating > 0 && (
                <>
                  <p className="text-xs text-gray-500 mb-8 text-center">{getRatingLabel(rating)}</p>

                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-[15px] font-bold text-gray-800 mb-1">What affected your answer?</p>
                      <p className="text-sm text-gray-600 mb-4">Please choose the relevant keywords</p>
                      
                      <div className="flex flex-wrap justify-center gap-2">
                        {getChips(rating).map((reason) => {
                          const isSelected = selectedKeywords.includes(reason);
                          return (
                            <button
                              key={reason}
                              onClick={() => toggleKeyword(reason)}
                              className={`px-4 py-1.5 border-2 rounded-full text-sm font-semibold transition-colors ${
                                isSelected 
                                  ? 'bg-[#0055E6] border-[#0055E6] text-white' 
                                  : 'border-[#0055E6] text-[#0055E6] hover:bg-blue-50 bg-transparent'
                              }`}
                            >
                              {reason}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-[15px] font-bold text-gray-800 mb-3">If you wish, please specify</p>
                      <div className="relative">
                        <textarea
                          className="w-full h-32 p-4 border border-gray-300 rounded-sm focus:border-[#0055E6] focus:outline-none resize-none"
                          placeholder=""
                          maxLength={500}
                        ></textarea>
                        <div className="text-left text-xs text-gray-500 mt-1">
                          0 / 500 characters
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-left text-xs text-gray-600">
                      <div className="mt-0.5 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      </div>
                      <p>
                        We will not respond to feedback sent via this form. Please do not add any personal information here.
                      </p>
                    </div>

                    <div className="text-center">
                      <button className="bg-primary text-white px-10 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-sm">
                        Send feedback
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-8 space-y-8">
            <div className="border-l-2 border-[#0055E6] pl-4">
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">CONTENTS</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-sm font-bold text-gray-900 hover:text-[#0055E6]">Accessibility guide</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-[#0055E6]">Accessibility</a>
                </li>
              </ul>
            </div>
            
            <div>
              <button 
                onClick={scrollToFeedback}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0055E6] font-normal"
              >
                <MessageSquare size={18} className="text-gray-400" />
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