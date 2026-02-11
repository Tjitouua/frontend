import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface FeedbackSectionProps {
  feedbackRef: React.RefObject<HTMLDivElement>;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ feedbackRef }) => {
  const [rating, setRating] = useState<number>(0);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setSelectedKeywords([]); 
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
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
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
                <div className="mt-0.5 shrink-0 text-blue-500">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackSection;
