export type Title = 'Mr' | 'Mrs' | 'Ms' | 'Miss' | 'Dr';
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';
export type LicenseType = 'full-uk' | 'provisional' | 'international';

export interface VehicleReg {
  registration: string;
}

export interface PersonalInfo {
  title: Title;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  county?: string;
  postcode: string;
  occupation: string;
  licenseType: LicenseType;
  yearsHeld: number;
}

export interface QuoteFormData {
  vehicleReg: VehicleReg;
  personalInfo: PersonalInfo;
  // Future steps will add:
  // vehicleDetails: VehicleDetails;
  // coverDetails: CoverDetails;
}
