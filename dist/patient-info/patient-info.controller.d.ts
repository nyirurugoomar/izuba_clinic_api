import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';
export declare class PatientInfoController {
    private readonly patientService;
    constructor(patientService: PatientInfoService);
    patient(req: any, dto: PatientDto): Promise<{
        message: string;
        patient: import("./schemas/patient").Patient;
    }>;
    getAllPatients(): Promise<import("./schemas/patient").Patient[]>;
}
