import { Module } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { PatientInfoController } from './patient-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './schemas/patient';

@Module({
  imports:[MongooseModule.forFeature([{name:'Patient',schema:PatientSchema}])],
  providers: [PatientInfoService],
  controllers: [PatientInfoController]
})
export class PatientInfoModule {}