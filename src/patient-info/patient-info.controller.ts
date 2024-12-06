import { Body, Controller, Post, Query } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';

@Controller('patient-info')
export class PatientInfoController {
    constructor(private readonly patientService: PatientInfoService){}

    @Post()
    async patient(
        @Query('register') register: string,
        @Body() dto:PatientDto){
        const data = { ...dto, register: [register] };
        return this.patientService.patientInfo(data)
    }
}
