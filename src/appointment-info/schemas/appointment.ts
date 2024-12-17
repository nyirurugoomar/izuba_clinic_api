import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Register } from "../../register/schemas/register.schema";





@Schema({
    timestamps: true,
})

export class Appointment{


    @Prop()
    doctors:string

    @Prop()
    reasonAppointment:string

    @Prop()
    additionComment?:string

    @Prop()
    date:Date

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Register' }] }) // Reference `Register` schema
    register: Types.ObjectId[];

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)