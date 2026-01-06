import { z } from 'zod';

const ukPhoneRegex = /^(?:(?:\+44)|(?:0))(?:\d{10}|\d{4}\s?\d{6}|\d{3}\s?\d{3}\s?\d{4})$/;
const ukPostcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const ukRegRegex = /^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$|^[A-Z][0-9]{1,3}\s?[A-Z]{3}$|^[A-Z]{3}\s?[0-9]{1,3}[A-Z]$|^[0-9]{1,4}\s?[A-Z]{1,3}$|^[A-Z]{1,3}\s?[0-9]{1,4}$/i;

export const vehicleRegSchema = z.object({
  registration: z
    .string()
    .min(1, 'Registration is required')
    .regex(ukRegRegex, 'Please enter a valid UK registration'),
});

export type VehicleRegFormData = z.infer<typeof vehicleRegSchema>;

export const personalInfoSchema = z.object({
  title: z.enum(['Mr', 'Mrs', 'Ms', 'Miss', 'Dr'], {
    required_error: 'Please select a title',
  }),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z
    .string()
    .min(1, 'Date of birth is required')
    .refine((date) => {
      const dob = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())
        ? age - 1
        : age;
      return actualAge >= 17;
    }, 'You must be at least 17 years old to get car insurance'),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say'], {
    required_error: 'Please select a gender',
  }),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(ukPhoneRegex, 'Please enter a valid UK phone number'),
  addressLine1: z
    .string()
    .min(1, 'Address line 1 is required'),
  addressLine2: z.string().optional(),
  city: z
    .string()
    .min(1, 'City is required'),
  county: z.string().optional(),
  postcode: z
    .string()
    .min(1, 'Postcode is required')
    .regex(ukPostcodeRegex, 'Please enter a valid UK postcode'),
  occupation: z
    .string()
    .min(1, 'Occupation is required'),
  licenseType: z.enum(['full-uk', 'provisional', 'international'], {
    required_error: 'Please select your license type',
  }),
  yearsHeld: z
    .number({ invalid_type_error: 'Please enter a number' })
    .min(0, 'Years held cannot be negative')
    .max(70, 'Please enter a valid number of years'),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
