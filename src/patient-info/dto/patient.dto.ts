import { IsString, IsEmail, IsPhoneNumber, IsEmpty, IsNumber } from 'class-validator';

export class PatientDto {
  @IsEmpty()
  @IsString()
  fullname: string;

  @IsEmpty()
  @IsString()
  @IsEmail()
  email: string;
  
  @IsEmpty()
  @IsNumber()
  number: number;

  @IsEmpty()
  @IsString()
  dob: string;

  @IsEmpty()
  @IsString()
  gender: string;

  @IsEmpty()
  @IsString()
  address: string;
  
  @IsEmpty()
  @IsString()
  occupation: string;

  @IsEmpty()
  @IsString()
  emergencyContactName: string;

  @IsEmpty()
  @IsNumber()
  emergencyPhoneNumber: number;

  @IsEmpty()
  @IsString()
  doctor: string;


  @IsEmpty()
  @IsString()
  insuranceProvider: string;


  @IsEmpty()
  @IsNumber()
  insurancePolicyNumber: number;


  @IsEmpty()
  @IsString()
  allergies: string;

  @IsEmpty()
  @IsString()
  currentMedications: string;

  @IsEmpty()
  @IsString()
  medicalHistory: string;


  @IsEmpty()
  @IsString()
  pastMedical: string;

  @IsEmpty()
  @IsString()
  birthCertificate: string;

  @IsEmpty()
  @IsNumber()
  identificationNumber: number;

}