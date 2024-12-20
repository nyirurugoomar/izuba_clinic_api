import { Body, Controller, Get, Post, Request, UseGuards,Query } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { PatientDto } from './dto/patient.dto';
// import { JwtAuthGuard } from '../register/guard/jwt-auth.guard'; // Correct path to your guard
import { JwtAuthGuard } from '../register/guards/jwt-auth.guard';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('patient-info')
export class PatientInfoController {
  constructor(private readonly patientService: PatientInfoService) {}

  @UseGuards(JwtAuthGuard) // Attach the guard to secure the route
  @Post()
  @ApiOperation({ summary: 'Add Patient Info' })
  @ApiResponse({
    status: 201,
    description: 'Patient info created successfully',
    type: PatientDto,
  })
  @ApiNotFoundResponse({ description: 'Failed to create patient info' })
  async patient(@Request() req: any, @Body() dto: PatientDto) {
    console.log('User from request:', req.user); // Log the user object to ensure it is populated correctly
    const registerId = req.user?.id
    const registerEmail =  req.user?.email
    const registerFullname = req.user?.fullname
    if (!registerId) {
      throw new Error('Register ID not found'); // Ensure `req.user.id` exists
    }
  
    const data = { ...dto, register: [registerId,registerEmail,registerFullname] }; // Attach `registerId`
    return this.patientService.patientInfo(data);
  }

  @Get()
  async getAllPatients(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.patientService.getAllPatients(page, limit);
  }
}
