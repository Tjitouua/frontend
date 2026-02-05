import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { WizardStep } from '../types';

interface StepIndicatorProps {
  steps: WizardStep[];
  currentStepIndex: number;
  onChangeStep: (index: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStepIndex, onChangeStep }) => {
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-hide">
      <div className="flex min-w-max items-center justify-between relative px-2">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 rounded-full" />
        
        {/* Active Progress Bar */}
        <motion.div 
          className="absolute top-1/2 left-0 h-1 bg-primary -z-10 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          
          return (
            <div key={step.id} className="flex flex-col items-center gap-2 mx-4 first:ml-0 last:mr-0">
              <button
                onClick={() => index <= currentStepIndex ? onChangeStep(index) : null}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 border-2
                  ${isActive 
                    ? 'bg-primary border-primary text-white shadow-lg scale-110 ring-4 ring-primary/20' 
                    : isCompleted 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'bg-white border-gray-300 text-gray-400'
                  }
                `}
                disabled={index > currentStepIndex}
              >
                {isCompleted ? <CheckCircle2 size={20} /> : <step.icon size={18} />}
              </button>
              <span className={`text-xs font-semibold hidden sm:block ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;