import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  HelpCircle,
  Save,
  CheckCircle2,
  Send,
  ArrowRight,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import { FormData } from './types';
import { STEPS, STORAGE_KEY } from './constants';
import StepIndicator from './components/StepIndicator';
import PersonalInfoStep from './components/steps/PersonalInfoStep';
import WorkExperienceStep from './components/steps/WorkExperienceStep';
import EducationStep from './components/steps/EducationStep';
import SkillsStep from './components/steps/SkillsStep';
import DocumentsStep from './components/steps/DocumentsStep';
import ConfirmationStep from './components/steps/ConfirmationStep';
import Card from '../../components/Card';

const JobApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
    },
    workExperience: [],
    education: [],
    skills: [],
    documents: {
      resume: null,
      coverLetter: null,
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error parsing saved data from localStorage", error);
      }
    }
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isLoading]);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const currentStep = STEPS[currentStepIndex];
  const progress = Math.round(((currentStepIndex) / (STEPS.length - 1)) * 100);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-gray-500 font-medium">Loading application...</p>
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep.id) {
      case 'personalInfo':
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />;
      case 'workExperience':
        return <WorkExperienceStep formData={formData} updateFormData={updateFormData} />;
      case 'education':
        return <EducationStep formData={formData} updateFormData={updateFormData} />;
      case 'skills':
        return <SkillsStep formData={formData} updateFormData={updateFormData} />;
      case 'documents':
        return <DocumentsStep formData={formData} updateFormData={updateFormData} />;
      case 'confirmation':
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 pb-20 font-sans relative">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-8 left-1/2 z-50 bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2"
          >
            <CheckCircle2 size={18} className="text-green-400" />
            <span>Draft saved successfully</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="hover:text-primary transition-colors cursor-pointer">Services</span>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">Job Application</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-light text-gray-900 mb-2">
              Job Application Process
            </h1>
            <p className="text-lg text-gray-600">
              Apply for your desired job in <span className="font-bold text-primary">6 simple steps</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
             <button
               onClick={handleSaveDraft}
               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-primary transition-all shadow-sm"
             >
               <Save size={16} />
               Save Draft
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <StepIndicator
                steps={STEPS}
                currentStepIndex={currentStepIndex}
                onChangeStep={setCurrentStepIndex}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  {renderStepContent()}
                </Card>

                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={handlePrev}
                    disabled={currentStepIndex === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all
                      ${currentStepIndex === 0
                        ? 'opacity-0 pointer-events-none'
                        : 'text-gray-600 hover:bg-white hover:shadow-md'
                      }`}
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  {currentStepIndex === STEPS.length - 1 ? (
                    <button
                      onClick={() => {
                        setShowToast(true);
                        setTimeout(() => navigate('/'), 2000);
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all"
                    >
                      Submit Application
                      <Send size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all"
                    >
                      Next Step
                      <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-8 space-y-6">
              <Card title="Your Progress">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Completion</span>
                  <span className="text-sm font-bold text-primary">{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500">
                  {progress < 100 ? 'Complete all steps to submit your application.' : 'You are ready to submit!'}
                </p>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                    <HelpCircle size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">Need Help?</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  If you have questions about the job application process, please contact HR.
                </p>
                <div className="space-y-2">
                  <a href="tel:+264612345678" className="block text-sm font-medium text-primary hover:underline">
                    +264 61 234 5678
                  </a>
                  <a href="mailto:hr@ecitizen.gov.na" className="block text-sm font-medium text-primary hover:underline">
                    hr@ecitizen.gov.na
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;
