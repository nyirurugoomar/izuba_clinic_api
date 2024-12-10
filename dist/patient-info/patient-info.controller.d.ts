import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';
export declare class PatientInfoController {
    private readonly patientService;
    constructor(patientService: PatientInfoService);
    patient(register: string, dto: PatientDto, extraData: any): Promise<{
        message: string;
        patient: import("./schemas/patient").Patient;
    }>;
}
