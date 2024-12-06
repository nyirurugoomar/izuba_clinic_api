import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Patient } from './schemas/patient';
import { PatientDto } from './dto/patient.dto';

@Injectable()
export class PatientInfoService {
    constructor(
        @InjectModel(Patient.name)
        private patientModel: mongoose.Model<Patient>
    ){}

    async patientInfo(dto: PatientDto): Promise<{ message: string; patient: Patient }> {
        try {
          const newPatient = await this.patientModel.create(dto);
      
          // Populate the `register` field
          const populatedPatient = await this.patientModel
            .findById(newPatient._id)
            .populate('register')
            .exec();
      
          return {
            message: 'Patient information saved successfully!',
            patient: populatedPatient,
          };
        } catch (error) {
          throw new Error(`Failed to save patient information: ${error.message}`);
        }
      }
}