import { Controller, Post, Body, Query, Request, UseGuards, Get } from '@nestjs/common';
import { AppointmentInfoService } from './appointment-info.service';
import { AppointmentDto } from './dto/appointment.dto';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../register/guards/jwt-auth.guard';

@Controller('appointment-info')
export class AppointmentInfoController {
    constructor(private readonly appointmentService: AppointmentInfoService) {}
    @UseGuards(JwtAuthGuard) // Attach the guard to secure the route
    @Post()
    @ApiOperation({ summary: 'Create Appointment' })
    @ApiResponse({
        status: 200,
        description: 'Appointment created successfully',
        isArray: true,
    })
    @ApiNotFoundResponse({ description: 'Failed to create appointment' })
    async appointment(
        @Request() req:any,
        @Body() dto: AppointmentDto,
    ) {
        console.log('User from request:', req.user); // Log the user object to ensure it is populated correctly
    const registerId = req.user?.id
    const registerEmail =  req.user?.email
    const registerFullname = req.user?.fullname
   
    if (!registerId) {
      throw new Error('Register ID not found'); // Ensure `req.user.id` exists
    }
        // Combine DTO with the register reference
        const data = { ...dto, register: [registerId,registerEmail,registerFullname] };
        return this.appointmentService.appointmentInfo(data);
    }


  @Get()
  async getAllAppointments() {
    return this.appointmentService.getAllAppointments();
  }
}
