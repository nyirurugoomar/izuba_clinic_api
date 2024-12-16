import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Register } from './schemas/register.schema';
import * as mongoose from 'mongoose';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(Register.name)
    private registerModel: mongoose.Model<Register>,
    private jwtService: JwtService, // Inject JWT service
  ) {}

  async registerUser(dto: RegisterDto): Promise<{ message: string; token: string }> {
    try {
      // Save user details to the database
      const newRegister = await this.registerModel.create(dto);

      // Create a token with user data (e.g., email, id)
      const tokenPayload = { email: newRegister.email, id: newRegister._id,fullname:newRegister.fullname };
      const token = this.jwtService.sign(tokenPayload);

      return {
        message: 'User registered successfully!',
        token, // Return token in response
      };
    } catch (error) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  }
}
