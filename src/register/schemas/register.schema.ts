import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";





@Schema({
    timestamps: true,
})

export class Register{
    @Prop()
    fullname: string


    @Prop()
    email: string


    @Prop()
    phone: number
}

export const RegisterSchema = SchemaFactory.createForClass(Register)