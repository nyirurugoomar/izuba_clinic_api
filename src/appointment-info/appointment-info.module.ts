import { Module } from '@nestjs/common';
import { AppointmentInfoService } from './appointment-info.service';
import { AppointmentInfoController } from './appointment-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentSchema } from './schemas/appointment';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Appointment',schema: AppointmentSchema}])],
  providers: [AppointmentInfoService],
  controllers: [AppointmentInfoController]
})
export class AppointmentInfoModule {}
