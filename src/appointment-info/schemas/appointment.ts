import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
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

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Register' }) // Reference to the Register model
    register: mongoose.Types.ObjectId; 

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)