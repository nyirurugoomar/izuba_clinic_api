import { Register } from './schemas/register.schema';
import * as mongoose from 'mongoose';
import { RegisterDto } from './dto/register.dto';
export declare class RegisterService {
    private registerModel;
    constructor(registerModel: mongoose.Model<Register>);
    registerUser(dto: RegisterDto): Promise<{
        message: string;
        register: Register;
    }>;
}
