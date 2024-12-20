import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';
export declare class PatientInfoController {
    private readonly patientService;
    constructor(patientService: PatientInfoService);
    patient(req: any, dto: PatientDto): Promise<{
        message: string;
        patient: import("./schemas/patient").Patient;
    }>;
    getAllPatients(page: number, limit: number): Promise<{
        patients: import("./schemas/patient").Patient[];
        total: number;
    }>;
}
