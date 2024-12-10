import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber, IsEmpty } from 'class-validator';

export class RegisterDto {
  @IsEmpty()
  @IsString()
  @ApiProperty({
    description:'Full name',
    example: 'John Smith'
  })
  fullname: string;

  @IsEmpty()
  @IsEmail()
  @ApiProperty({
    description:'Email address',
    example: 'john.smith@example.com'
  })
  email: string;

  @IsEmpty()
  @IsPhoneNumber()
  @ApiProperty({
    description:'Phone number',
    example: '+1 123-456-7890'
  })
  phone: number;
}