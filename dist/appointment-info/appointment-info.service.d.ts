import { Model } from 'mongoose';
import { Appointment } from './schemas/appointment';
import { AppointmentDto } from './dto/appointment.dto';
export declare class AppointmentInfoService {
    private appointmentModel;
    constructor(appointmentModel: Model<Appointment>);
    appointmentInfo(dto: AppointmentDto): Promise<{
        message: string;
        appointment: Appointment;
    }>;
    getAllAppointments(): Promise<Appointment[]>;
}
