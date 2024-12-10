import { Body, Controller, Post, Query } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('patient-info')
export class PatientInfoController {
    constructor(private readonly patientService: PatientInfoService){}

    @Post()
    @ApiOperation({summary:'Patient'})
    @ApiResponse({
        status: 201,
        description: 'Patient info created successfully',
        type:PatientDto,
        isArray:true
  
    })
    @ApiNotFoundResponse({description:'Fail to create patient info'})
    async patient(
        @Query('register') register: string,
        @Body() dto: PatientDto,
        @Body('extraData') extraData: any, // Parse additional JSON fields from the body
    ) {
        // Combine all data into a single object
        const data = { ...dto, register: [register], extraData };
        return this.patientService.patientInfo(data); // Pass the combined data to the service
    }
    
}
    