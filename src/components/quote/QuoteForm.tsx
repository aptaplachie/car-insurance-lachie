'use client';

import { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { PersonalInfoStep } from './PersonalInfoStep';
import { PersonalInfoFormData } from '@/lib/validations/quote';

const STEPS = ['Personal Info', 'Vehicle', 'Cover', 'Quote'];

interface QuoteFormState {
  personalInfo?: PersonalInfoFormData;
  // Future steps will add:
  // vehicleInfo?: VehicleInfoFormData;
  // coverDetails?: CoverDetailsFormData;
}

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormState>({});

  const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
    setFormData((prev) => ({ ...prev, personalInfo: data }));
    setCurrentStep(2);
    // For now, we'll just show a placeholder for step 2
    console.log('Personal info submitted:', data);
  };

  return (
    <div>
      <ProgressBar
        currentStep={currentStep}
        totalSteps={STEPS.length}
        steps={STEPS}
      />

      {currentStep === 1 && (
        <PersonalInfoStep
          onSubmit={handlePersonalInfoSubmit}
          defaultValues={formData.personalInfo}
        />
      )}

      {currentStep === 2 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Personal Information Saved!
          </h3>
          <p className="text-slate-600 mb-6">
            Next step: Vehicle Information (coming soon)
          </p>
          <button
            onClick={() => setCurrentStep(1)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            &larr; Back to Personal Info
          </button>
        </div>
      )}
    </div>
  );
}
