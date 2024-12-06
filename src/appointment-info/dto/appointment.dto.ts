import { IsDate, IsEmpty, IsOptional, IsString } from "class-validator";


export class AppointmentDto{
    @IsEmpty()
    @IsString()
    doctor: string


    @IsEmpty()
    @IsString()
    reasonAppointment: string

    @IsOptional()
    @IsString()
    additionComment: string

    @IsOptional()
    @IsDate()
    Date: Date


}