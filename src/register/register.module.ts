import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterSchema } from './schemas/register.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Register',schema:RegisterSchema}])],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
