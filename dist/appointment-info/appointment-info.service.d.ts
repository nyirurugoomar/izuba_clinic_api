import mongoose from 'mongoose';
import { Appointment } from './schemas/appointment';
import { AppointmentDto } from './dto/appointment.dto';
export declare class AppointmentInfoService {
    private appointmentModel;
    constructor(appointmentModel: mongoose.Model<Appointment>);
    appointmentInfo(dto: AppointmentDto): Promise<{
        message: string;
        appontment: Appointment;
    }>;
}
