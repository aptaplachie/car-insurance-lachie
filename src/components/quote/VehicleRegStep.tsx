'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { vehicleRegSchema, VehicleRegFormData } from '@/lib/validations/quote';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

interface VehicleRegStepProps {
  onSubmit: (data: VehicleRegFormData) => void;
  defaultValues?: Partial<VehicleRegFormData>;
}

export function VehicleRegStep({ onSubmit, defaultValues }: VehicleRegStepProps) {
  const [regValue, setRegValue] = useState(defaultValues?.registration || '');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<VehicleRegFormData>({
    resolver: zodResolver(vehicleRegSchema),
    defaultValues,
  });

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9\s]/g, '');
    setRegValue(value);
    setValue('registration', value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Let&apos;s start with your vehicle
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
          Enter your registration number and we&apos;ll look up your vehicle details automatically.
        </p>
      </div>

      {/* Registration Input - styled like a UK number plate */}
      <div className="max-w-sm mx-auto">
        <label htmlFor="registration" className="sr-only">
          Vehicle registration
        </label>
        <div className="relative">
          <div className="flex items-stretch rounded-lg overflow-hidden border-2 border-gray-300 focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-100 transition-colors bg-yellow-400">
            {/* Blue side strip */}
            <div className="w-10 sm:w-12 bg-blue-700 flex flex-col items-center justify-center py-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-0.5">
                <span className="text-yellow-400 text-[8px] sm:text-[10px] font-bold">EU</span>
              </div>
              <span className="text-white text-[10px] sm:text-xs font-bold">GB</span>
            </div>
            {/* Input */}
            <input
              id="registration"
              type="text"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck="false"
              placeholder="AB12 CDE"
              maxLength={8}
              {...register('registration')}
              value={regValue}
              onChange={handleRegChange}
              className="flex-1 px-3 sm:px-4 py-4 sm:py-5 bg-yellow-400 text-gray-900 text-2xl sm:text-3xl font-bold tracking-wider text-center placeholder:text-yellow-600/50 focus:outline-none uppercase"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            />
          </div>
        </div>
        {errors.registration && (
          <p className="mt-2 text-sm text-red-500 text-center">
            {errors.registration.message}
          </p>
        )}
      </div>

      {/* Helper text */}
      <p className="text-center text-xs sm:text-sm text-gray-500">
        You can find this on your V5C logbook or the front/rear of your vehicle
      </p>

      {/* Submit Button */}
      <div className="flex justify-center pt-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto min-w-[200px]">
          {isSubmitting ? 'Looking up vehicle...' : 'Find my vehicle'}
        </Button>
      </div>

      {/* Don't know reg link */}
      <p className="text-center">
        <button
          type="button"
          className="text-purple-700 hover:text-purple-800 text-sm font-medium hover:underline"
        >
          I don&apos;t know my registration
        </button>
      </p>
    </form>
  );
}
