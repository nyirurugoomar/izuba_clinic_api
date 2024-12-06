import { AppointmentInfoService } from './appointment-info.service';
import { AppointmentDto } from './dto/appointment.dto';
export declare class AppointmentInfoController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentInfoService);
    appointment(register: string, dto: AppointmentDto): Promise<{
        message: string;
        appontment: import("./schemas/appointment").Appointment;
    }>;
}
