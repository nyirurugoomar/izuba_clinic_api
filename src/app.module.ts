import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PatientInfoModule } from './patient-info/patient-info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
   }),
    MongooseModule.forRoot(process.env.DB_URI),
    RegisterModule,
    PatientInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
