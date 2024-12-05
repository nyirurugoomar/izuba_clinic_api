import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Register } from './schemas/register.schema';
import * as  mongoose from 'mongoose';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
    constructor(
        @InjectModel(Register.name) 
        private registerModel: mongoose.Model<Register>){}


        async registerUser(dto: RegisterDto): Promise<{ message: string; register: Register }> {
            try {
              // Create the new register entry
              const newRegister = await this.registerModel.create(dto);
              return {
                message: 'User registered successfully!',
                register: newRegister,
              };
            } catch (error) {
              throw new Error(`Registration failed: ${error.message}`);
            }
          }
    

   
}
