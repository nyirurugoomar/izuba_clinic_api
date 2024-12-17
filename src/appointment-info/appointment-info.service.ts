import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Appointment } from './schemas/appointment';
import { AppointmentDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentInfoService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel: Model<Appointment>,
  ) {}

  async appointmentInfo(
    dto: AppointmentDto,
  ): Promise<{ message: string; appointment: Appointment }> {
    try {
      // Create a new appointment
      const newAppointment = await this.appointmentModel.create(dto);

      // Populate the `register` field
      const populatedAppointment = await this.appointmentModel
        .findById(newAppointment._id)
        .populate('register', 'email fullname') // Ensure `register` field is populated
        .exec();

      return {
        message: 'Appointment information saved successfully!',
        appointment: populatedAppointment,
      };
    } catch (error) {
      throw new Error(
        `Failed to save appointment information: ${error.message}`,
      );
    }
  }

  async getAllAppointments(): Promise<Appointment[]> {
    try {
      const appointments = await this.appointmentModel
        .find()
        .populate('register', 'email fullname') // Populate `register` field
        .exec();

      return appointments;
    } catch (error) {
      throw new Error(
        `Failed to retrieve appointments: ${error.message}`,
      );
    }
  }
}
