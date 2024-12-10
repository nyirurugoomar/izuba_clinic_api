import { Controller, Post, Body, Query } from '@nestjs/common';
import { AppointmentInfoService } from './appointment-info.service';
import { AppointmentDto } from './dto/appointment.dto';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('appointment-info')
export class AppointmentInfoController {
    constructor(private readonly appointmentService:AppointmentInfoService){}

    @Post()
    @ApiOperation({summary:'Appointment'})
    @ApiResponse({
       status:200,
       description:'Appintment successfully',
       isArray:true

    })
    @ApiNotFoundResponse({description:'Fail to make appointment'})
    async appointment(
        @Query('register') register: string,
        @Body() 
        dto:AppointmentDto){
            const data = { ...dto, register: [register] };
        return this.appointmentService.appointmentInfo(data)
    }
}
