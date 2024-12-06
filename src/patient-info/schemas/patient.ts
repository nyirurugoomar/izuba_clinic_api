import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Register } from "../../register/schemas/register.schema";





@Schema({
    timestamps: true,
})


export class Patient{


    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: () => Register }] })
  register: mongoose.Types.ObjectId[];

    @Prop()
    fullnam:string

    @Prop()
    email:string

    @Prop()
    number:number

    @Prop()
    dob:string
    

    @Prop()
    gender:string
   
    @Prop()
    address:string

    @Prop()
    occupation:string

    @Prop()
    emergencyContactName:string

    @Prop()
    emergencyPhoneNumber:number

    @Prop()
    doctor:string

    @Prop()
    insuranceProvider:string

    @Prop()
    insurancePolicyNumber:number

    @Prop()
    allergies:string

    @Prop()
    currentMedications:string

    @Prop()
    medicalHistory:string

    @Prop()
    pastMedical:string

    @Prop()
    birthCertificate:string

    @Prop()
    identificationNumber:number
}

export const PatientSchema = SchemaFactory.createForClass(Patient)