import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @ApiOperation({ summary: 'Register' })
  @ApiResponse({
    status: 201,
    description: 'Registered successfully',
    type: RegisterDto,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'Fail to register' })
  async register(@Body() dto: RegisterDto) {
    return this.registerService.registerUser(dto);
  }
}
