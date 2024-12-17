import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmpty, IsOptional, IsString } from "class-validator";


export class AppointmentDto{



    register: string[];

    @IsEmpty()
    @IsString()
    @ApiProperty({
        description:'Doctor name',
        example:'Dr smith'
    })
    doctors: string


    @IsEmpty()
    @IsString()
    @ApiProperty({
        description:'Reason why you want to make appointment',
        example:'Sick'
    })
    reasonAppointment: string

    @IsOptional()
    @IsString()
    @ApiProperty({
        description:'Comment why you want to make appointment',
        example:'Last nigh i was not feeling good'
    })
    additionComment: string

    @IsOptional()
    @IsDate()
    @ApiProperty({
        description:'Date',
        example:'2001/4/2'
    })
    Date: Date


}