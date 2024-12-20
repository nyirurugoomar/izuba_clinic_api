import { Model } from 'mongoose';
import { Patient } from './schemas/patient';
import { PatientDto } from './dto/patient.dto';
export declare class PatientInfoService {
    private patientModel;
    constructor(patientModel: Model<Patient>);
    patientInfo(dto: PatientDto): Promise<{
        message: string;
        patient: Patient;
    }>;
    getAllPatients(page: number, limit: number): Promise<{
        patients: Patient[];
        total: number;
    }>;
}
