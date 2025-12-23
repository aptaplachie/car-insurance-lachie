'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema, PersonalInfoFormData } from '@/lib/validations/quote';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

interface PersonalInfoStepProps {
  onSubmit: (data: PersonalInfoFormData) => void;
  defaultValues?: Partial<PersonalInfoFormData>;
}

const titleOptions = [
  { value: 'Mr', label: 'Mr' },
  { value: 'Mrs', label: 'Mrs' },
  { value: 'Ms', label: 'Ms' },
  { value: 'Miss', label: 'Miss' },
  { value: 'Dr', label: 'Dr' },
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

const licenseTypeOptions = [
  { value: 'full-uk', label: 'Full UK License' },
  { value: 'provisional', label: 'Provisional License' },
  { value: 'international', label: 'International License' },
];

export function PersonalInfoStep({ onSubmit, defaultValues }: PersonalInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Your Details Section */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Your Details
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Select
            label="Title"
            options={titleOptions}
            error={errors.title?.message}
            required
            {...register('title')}
          />
          <Input
            label="First Name"
            error={errors.firstName?.message}
            required
            {...register('firstName')}
          />
          <Input
            label="Last Name"
            error={errors.lastName?.message}
            required
            {...register('lastName')}
          />
          <Input
            label="Date of Birth"
            type="date"
            error={errors.dateOfBirth?.message}
            required
            {...register('dateOfBirth')}
          />
          <Select
            label="Gender"
            options={genderOptions}
            error={errors.gender?.message}
            required
            {...register('gender')}
          />
        </div>
      </div>

      {/* Contact Information Section */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Contact Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            error={errors.email?.message}
            required
            {...register('email')}
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="07XXX XXXXXX"
            error={errors.phone?.message}
            required
            {...register('phone')}
          />
        </div>
      </div>

      {/* Address Section */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Address
        </h3>
        <div className="space-y-4">
          <Input
            label="Address Line 1"
            error={errors.addressLine1?.message}
            required
            {...register('addressLine1')}
          />
          <Input
            label="Address Line 2"
            error={errors.addressLine2?.message}
            {...register('addressLine2')}
          />
          <div className="grid sm:grid-cols-3 gap-4">
            <Input
              label="City"
              error={errors.city?.message}
              required
              {...register('city')}
            />
            <Input
              label="County"
              error={errors.county?.message}
              {...register('county')}
            />
            <Input
              label="Postcode"
              placeholder="SW1A 1AA"
              error={errors.postcode?.message}
              required
              {...register('postcode')}
            />
          </div>
        </div>
      </div>

      {/* Occupation Section */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Occupation
        </h3>
        <div className="max-w-md">
          <Input
            label="Your Occupation"
            placeholder="e.g. Software Engineer"
            error={errors.occupation?.message}
            required
            {...register('occupation')}
          />
        </div>
      </div>

      {/* License Information Section */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          License Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <Select
            label="License Type"
            options={licenseTypeOptions}
            error={errors.licenseType?.message}
            required
            {...register('licenseType')}
          />
          <Input
            label="Years License Held"
            type="number"
            min="0"
            max="70"
            error={errors.yearsHeld?.message}
            required
            {...register('yearsHeld', { valueAsNumber: true })}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4 border-t border-slate-200">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Continue to Vehicle Details'}
        </Button>
      </div>
    </form>
  );
}
