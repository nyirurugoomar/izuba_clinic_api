import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    register(dto: RegisterDto): Promise<{
        message: string;
        register: import("./schemas/register.schema").Register;
    }>;
}
