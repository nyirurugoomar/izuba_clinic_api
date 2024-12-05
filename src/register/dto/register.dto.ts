import { IsString, IsEmail, IsPhoneNumber, IsEmpty } from 'class-validator';

export class RegisterDto {
  @IsEmpty()
  @IsString()
  fullname: string;

  @IsEmpty()
  @IsEmail()
  email: string;

  @IsEmpty()
  @IsPhoneNumber()
  phone: number;
}