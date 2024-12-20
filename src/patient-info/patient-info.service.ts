import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './schemas/patient';
import { PatientDto } from './dto/patient.dto';

@Injectable()
export class PatientInfoService {
  constructor(
    @InjectModel(Patient.name)
    private patientModel: Model<Patient>,
  ) {}

  async patientInfo(dto: PatientDto): Promise<{ message: string; patient: Patient }> {
    try {
      const newPatient = await this.patientModel.create(dto);

      // Populate the `register` field with `email` and `fullname`
      const populatedPatient = await this.patientModel
        .findById(newPatient._id)
        .populate('register', 'email fullname') // Populate both `email` and `fullname`
        .exec();

      return {
        message: 'Patient information saved successfully!',
        patient: populatedPatient,
      };
    } catch (error) {
      throw new Error(`Failed to save patient info: ${error.message}`);
    }
  }

  async getAllPatients(page: number, limit: number): Promise<{patients: Patient[]; total: number}> {
    try {
      const skip = (page - 1) * limit;
      const patients = await this.patientModel
        .find()
        .populate('register', 'email fullname') // Populate `register` field
        .skip(skip)
        .limit(limit)
        .exec();
        const total = await this.patientModel.countDocuments();

        return { patients, total };
    } catch (error) {
      throw new Error(`Failed to retrieve patients: ${error.message}`);
    }
  }
}
