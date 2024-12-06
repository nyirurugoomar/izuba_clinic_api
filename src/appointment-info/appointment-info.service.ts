import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Appointment } from './schemas/appointment';
import { AppointmentDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentInfoService {
    constructor(
        @InjectModel(Appointment.name)
        private appointmentModel:mongoose.Model<Appointment>
    ){}

    async appointmentInfo(dto:AppointmentDto):Promise<{message:string; appontment:Appointment}>{
        try {
            const newAppointment = await this.appointmentModel.create(dto);
            const populatedAppointment = await this.appointmentModel
                  .findById(newAppointment._id)
                  .populate('register')
                  .exec();
            return {
                message: 'Appointment information saved successfully!',
                appontment: populatedAppointment,
            };
        } catch (error) {
            throw new Error(`Failed to save appointment information: ${error.message}`);
        }
    }
}
