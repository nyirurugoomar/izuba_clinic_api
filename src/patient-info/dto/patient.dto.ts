import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber, IsEmpty, IsNumber } from 'class-validator';

export class PatientDto {


  register: string[];

  
  @IsEmpty()
  @IsString()
  @ApiProperty({
    description:'Full name',
    example: 'John Smith'
  })
  fullname: string;

  @IsEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    description:'Email address',
    example: 'john.smith@example.com'
  })
  email: string;
  
  @IsEmpty()
  @IsNumber()
  @ApiProperty({
    description:'Phone number',
    example: '+1 123-456-7890'
  })
  number: number;

  @IsEmpty()
  @IsString()
   @ApiProperty({ 
    description:'Date of birth',
    example: '2000-01-01'  // YYYY-MM-DD format 1900-01-01 to current date is acceptable.
  })
  dob: string;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Gender',
    example: 'Male'  
  })
  gender: string;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Address',
    example: 'kigali street'  
  })
  address: string;
  
  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Occupation',
    example: 'Teacher'  
  })
  occupation: string;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Emergency contact name',
    example: 'Mrs. Smith'  
  })
  emergencyContactName: string;

  @IsEmpty()
  @IsNumber()
  @ApiProperty({ 
    description:'Emergency contact phone number',
    example: '+255 123-456-7890'  
  })
  emergencyPhoneNumber: number;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Doctor',
    example: 'Dr. John Doe'  
  })
  doctor: string;


  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Insurance provider',
    example: 'Healthcare Insurance'  
  })
  insuranceProvider: string;


  @IsEmpty()
  @IsNumber()
  @ApiProperty({ 
    description:'Insurance policy number',
    example: '123456789'  
  })
  insurancePolicyNumber: number;


  
  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Allergies',
    example: 'Pollen, Dust allergies'  
  })
  allergies: string;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Current medications',
    example: 'Aspirin, ibuprofen'  
  })
  currentMedications: string;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Medical history',
    example: 'Hypertension, diabetes'  
  })
  medicalHistory: string;


  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Past medical history',
    example: 'Heart attack, stroke'  
  })
  pastMedical: string;

  @IsEmpty()
  @IsString()
  @ApiProperty({ 
    description:'Birth certificate',
    example: '1234567890'  
  })
  birthCertificate: string;

  @IsEmpty()
  @IsNumber()
  @ApiProperty({ 
    description:'Identification number',
    example: '1234567890'  
  })
  identificationNumber: number;

}