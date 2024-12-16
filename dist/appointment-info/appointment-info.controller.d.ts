import { AppointmentInfoService } from './appointment-info.service';
import { AppointmentDto } from './dto/appointment.dto';
export declare class AppointmentInfoController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentInfoService);
    appointment(req: any, dto: AppointmentDto): Promise<{
        message: string;
        appointment: import("./schemas/appointment").Appointment;
    }>;
}
