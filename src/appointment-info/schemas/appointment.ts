import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Register } from "../../register/schemas/register.schema";





@Schema({
    timestamps: true,
})

export class Appointment{

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: () => Register }] })
     register: mongoose.Types.ObjectId[];

    @Prop()
    doctors:string

    @Prop()
    reasonAppointment:string

    @Prop()
    additionComment?:string

    @Prop()
    date:Date

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)