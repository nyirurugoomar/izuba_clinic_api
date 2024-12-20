import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema({
    timestamps: true,
  })
  export class Patient {
    @Prop({ type: [{ type: Types.ObjectId, ref: 'Register' }] }) // Reference `Register` schema
    register: Types.ObjectId[];
  
    @Prop()
    fullName: string;
  
    @Prop()
    email: string;
  
    @Prop()
    phoneNumber: string;
  
    @Prop()
    dob: string;
  
    @Prop()
    gender: string;
  
    @Prop()
    address: string;
  
    @Prop()
    occupation: string;
  
    @Prop()
    emergencyContactName: string;
  
    @Prop()
    emergencyPhoneNumber: string;
  
    @Prop()
    doctor: string;
  
    @Prop()
    insuranceProvider: string;
  
    @Prop()
    insurancePolicyNumber: number;
  
    @Prop()
    allergies: string;
  
    @Prop()
    currentMedications: string;
  
    @Prop()
    medicalHistory: string;
  
    @Prop()
    pastMedical: string;
  
    @Prop()
    birthCertificate: string;
  
    @Prop()
    identificationNumber: number;
  }
  
  export const PatientSchema = SchemaFactory.createForClass(Patient);
  