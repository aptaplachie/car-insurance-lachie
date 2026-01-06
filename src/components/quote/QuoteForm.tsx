'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProgressBar } from './ProgressBar';
import { PersonalInfoStep } from './PersonalInfoStep';
import { VehicleRegStep } from './VehicleRegStep';
import { PersonalInfoFormData, VehicleRegFormData } from '@/lib/validations/quote';

const STEPS = ['Your Details', 'Vehicle', 'Cover', 'Quote'];

// Mock NatSouth customer data (in real app, this would come from an API)
const NATSOUTH_CUSTOMER_DATA: Partial<PersonalInfoFormData> = {
  title: 'Mr',
  firstName: 'James',
  lastName: 'Wilson',
  dateOfBirth: '1985-06-15',
  gender: 'male',
  email: 'james.wilson@email.com',
  phone: '07700 900123',
  addressLine1: '42 Bank Street',
  addressLine2: 'Apartment 3B',
  city: 'London',
  county: 'Greater London',
  postcode: 'SW1A 1AA',
  occupation: 'Financial Analyst',
  licenseType: 'full-uk',
  yearsHeld: 12,
};

interface QuoteFormState {
  vehicleReg?: VehicleRegFormData;
  personalInfo?: PersonalInfoFormData;
  usePrefill?: boolean;
}

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get('prefill') === 'natsouth';

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormState>({
    usePrefill: prefill,
    personalInfo: prefill ? NATSOUTH_CUSTOMER_DATA as PersonalInfoFormData : undefined,
  });

  const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
    setFormData((prev) => ({ ...prev, personalInfo: data }));
    setCurrentStep(2);
    console.log('Personal info submitted:', data);
  };

  const handleVehicleRegSubmit = (data: VehicleRegFormData) => {
    setFormData((prev) => ({ ...prev, vehicleReg: data }));
    setCurrentStep(3);
    console.log('Vehicle reg submitted:', data);
  };

  return (
    <div>
      <ProgressBar
        currentStep={currentStep}
        totalSteps={STEPS.length}
        steps={STEPS}
      />

      {/* Step 1: Personal Details */}
      {currentStep === 1 && (
        <div>
          {/* NatSouth prefill banner */}
          {formData.usePrefill && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-900">Using your NatSouth details</p>
                  <p className="text-sm text-green-700">We&apos;ve pre-filled your information. Please check everything is correct.</p>
                </div>
              </div>
            </div>
          )}
          <PersonalInfoStep
            onSubmit={handlePersonalInfoSubmit}
            defaultValues={formData.personalInfo}
          />
        </div>
      )}

      {/* Step 2: Vehicle Registration */}
      {currentStep === 2 && (
        <div>
          {/* Personal info confirmation banner */}
          {formData.personalInfo && (
            <div className="mb-6 p-4 bg-purple-50 border border-purple-100 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Your details</p>
                    <p className="font-semibold text-gray-900">
                      {formData.personalInfo.firstName} {formData.personalInfo.lastName}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-purple-700 hover:text-purple-800 text-sm font-medium"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
          <VehicleRegStep
            onSubmit={handleVehicleRegSubmit}
            defaultValues={formData.vehicleReg}
          />
        </div>
      )}

      {/* Step 3: Placeholder for Cover options */}
      {currentStep === 3 && (
        <div className="text-center py-10 sm:py-12">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Vehicle found
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Next step: Cover options (coming soon)
          </p>
          <button
            onClick={() => setCurrentStep(2)}
            className="text-purple-700 hover:text-purple-800 font-medium text-sm sm:text-base inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to vehicle
          </button>
        </div>
      )}
    </div>
  );
}
