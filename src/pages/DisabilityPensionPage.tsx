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

// Types & Constants
import { StepId, Person, FormData, ModalFormState } from './disability-pension/types';
import { STEPS, STORAGE_KEY } from './disability-pension/constants';

// Shared Components
import Card from './disability-pension/components/Card';
import StepIndicator from './disability-pension/components/StepIndicator';
import PersonModal from './disability-pension/components/PersonModal';
import GrantModal from './disability-pension/components/GrantModal';

// Step Components
import StartingStep from './disability-pension/components/steps/StartingStep';
import PersonStep from './disability-pension/components/steps/PersonStep';
import GrantStep from './disability-pension/components/steps/GrantStep';
import PaymentStep from './disability-pension/components/steps/PaymentStep';
import DocumentsStep from './disability-pension/components/steps/DocumentsStep';
import ConfirmationStep from './disability-pension/components/steps/ConfirmationStep';

const DisabilityPensionPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  
  // Person Modal State
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);
  const [personModalType, setPersonModalType] = useState<'Applicant' | 'Procurator' | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Grant Modal State
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);
  const [grantModalType, setGrantModalType] = useState<'Permanent' | 'Temporary' | null>(null);
  const [isSavingGrant, setIsSavingGrant] = useState(false);

  // Persons List State
  const [persons, setPersons] = useState<Person[]>([]);

  // Modal Form State
  const [modalForm, setModalForm] = useState<ModalFormState>({
    updateStatus: 'New',
    code: '0',
    firstName: '',
    lastName: '',
    maidenName: '',
    initials: '',
    dob: '',
    identityType: 'IDENTITY DOCUMENT',
    identifierNumber: '',
    countryOfBirth: 'NAMIBIA',
    nationality: 'NAMIBIA',
    maritalStatus: '',
    gender: 'MALE',
    telephone: '',
    postalAddress: '',
    residentialAddress: '',
    mobilePhone: '',
    homeLanguage: 'ǃXÓÕ',
    capacityCode: '6'
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    idNumber: '',
    grantType: '',
    grantCode: '',
    grantDuration: 0,
    bankName: '',
    accountNumber: ''
  });

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  // Auto-save effect
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isLoading]);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

  const openPersonModal = (type: 'Applicant' | 'Procurator') => {
    setPersonModalType(type);
    setIsPersonModalOpen(true);
  };

  const openGrantModal = (type: 'Permanent' | 'Temporary') => {
    setGrantModalType(type);
    setIsGrantModalOpen(true);
  };

  const handleSaveGrant = (type: 'Permanent' | 'Temporary', duration: number) => {
    setIsSavingGrant(true);
    setTimeout(() => {
      updateFormData({
        grantType: type,
        grantCode: type === 'Permanent' ? '22' : '05',
        grantDuration: type === 'Permanent' ? undefined : duration
      });
      setIsSavingGrant(false);
      setIsGrantModalOpen(false);
    }, 500);
  };

  const handleSavePerson = () => {
    setIsSearching(true);
    setTimeout(() => {
      const newPerson: Person = {
        code: `P${Math.floor(Math.random() * 10000)}`,
        name: modalForm.firstName,
        surname: modalForm.lastName,
        gender: modalForm.gender,
        dob: modalForm.dob,
        idNumber: modalForm.identifierNumber,
        capacity: personModalType || 'Applicant'
      };
      setPersons(prev => [...prev, newPerson]);
      setIsSearching(false);
      setIsPersonModalOpen(false);
      // Reset form
      setModalForm({
        updateStatus: 'New',
        code: '0',
        firstName: '',
        lastName: '',
        maidenName: '',
        initials: '',
        dob: '',
        identityType: 'IDENTITY DOCUMENT',
        identifierNumber: '',
        countryOfBirth: 'NAMIBIA',
        nationality: 'NAMIBIA',
        maritalStatus: '',
        gender: 'MALE',
        telephone: '',
        postalAddress: '',
        residentialAddress: '',
        mobilePhone: '',
        homeLanguage: 'ǃXÓÕ',
        capacityCode: '6'
      });
    }, 800);
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
      case 'starting':
        return <StartingStep />;
      case 'person':
        return (
          <PersonStep 
            onOpenModal={openPersonModal} 
            persons={persons} 
            onClearList={() => setPersons([])} 
          />
        );
      case 'grant':
        return (
          <GrantStep 
            formData={formData} 
            persons={persons} 
            onUpdateFormData={updateFormData} 
            onOpenModal={openGrantModal}
          />
        );
      case 'payment':
        return <PaymentStep formData={formData} onUpdateField={updateField} />;
      case 'documents':
        return <DocumentsStep />;
      case 'confirmation':
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 pb-20 font-sans relative">
      {/* Toast Notification */}
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

      <PersonModal 
        isOpen={isPersonModalOpen}
        onClose={() => setIsPersonModalOpen(false)}
        type={personModalType}
        modalForm={modalForm}
        setModalForm={setModalForm}
        onSave={handleSavePerson}
        isSaving={isSearching}
      />

      <GrantModal 
        isOpen={isGrantModalOpen}
        onClose={() => setIsGrantModalOpen(false)}
        type={grantModalType}
        initialDuration={formData.grantDuration || 0}
        onSave={handleSaveGrant}
        isSaving={isSavingGrant}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="hover:text-primary transition-colors cursor-pointer">Services</span>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">Disability & Pension</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-light text-gray-900 mb-2">
              Pension\Disability Grants Registration Process
            </h1>
            <p className="text-lg text-gray-600">
              Apply for social assistance grants in <span className="font-bold text-primary">6 simple steps</span>
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

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Column */}
          <div className="flex-1 min-w-0">
            
            {/* Stepper */}
            <div className="mb-8">
              <StepIndicator 
                steps={STEPS} 
                currentStepIndex={currentStepIndex} 
                onChangeStep={setCurrentStepIndex}
              />
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="min-h-[400px]">
                  {renderStepContent()}
                </Card>

                {/* Navigation Buttons */}
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
                        // In real app, submit here
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

          {/* Sidebar */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-8 space-y-6">
              
              {/* Progress Card */}
              <Card title="Your Progress">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Completion</span>
                  <span className="text-sm font-bold text-primary">{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500">
                  {progress < 100 ? 'Keep going! You are doing great.' : 'You are ready to submit!'}
                </p>
              </Card>

              {/* Help Card */}
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                    <HelpCircle size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">Need Help?</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  If you are having trouble with the application, our support team is available.
                </p>
                <div className="space-y-2">
                  <a href="tel:+264612837111" className="block text-sm font-medium text-primary hover:underline">
                    +264 61 234 5678
                  </a>
                  <a href="mailto:support@ecitizen.gov.na" className="block text-sm font-medium text-primary hover:underline">
                    support@ecitizen.gov.na
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

export default DisabilityPensionPage;