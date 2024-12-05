import { Body, Controller, Post } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';

@Controller('patient-info')
export class PatientInfoController {
    constructor(private readonly patientService: PatientInfoService){}

    @Post()
    async patient(@Body() dto:PatientDto){
        return this.patientService.patientInfo(dto)
    }
}
