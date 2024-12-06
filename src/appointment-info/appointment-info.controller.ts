import { Controller, Post, Body, Query } from '@nestjs/common';
import { AppointmentInfoService } from './appointment-info.service';
import { AppointmentDto } from './dto/appointment.dto';

@Controller('appointment-info')
export class AppointmentInfoController {
    constructor(private readonly appointmentService:AppointmentInfoService){}

    @Post()
    async appointment(
        @Query('register') register: string,
        @Body() 
        dto:AppointmentDto){
            const data = { ...dto, register: [register] };
        return this.appointmentService.appointmentInfo(data)
    }
}
