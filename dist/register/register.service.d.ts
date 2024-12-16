import { Register } from './schemas/register.schema';
import * as mongoose from 'mongoose';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class RegisterService {
    private registerModel;
    private jwtService;
    constructor(registerModel: mongoose.Model<Register>, jwtService: JwtService);
    registerUser(dto: RegisterDto): Promise<{
        message: string;
        token: string;
    }>;
}
