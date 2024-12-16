import mongoose, { Types } from "mongoose";
export declare class Patient {
    register: Types.ObjectId[];
    fullName: string;
    email: string;
    phoneNumber: string;
    dob: string;
    gender: string;
    address: string;
    occupation: string;
    emergencyContactName: string;
    emergencyPhoneNumber: string;
    doctor: string;
    insuranceProvider: string;
    insurancePolicyNumber: number;
    allergies: string;
    currentMedications: string;
    medicalHistory: string;
    pastMedical: string;
    birthCertificate: string;
    identificationNumber: number;
}
export declare const PatientSchema: mongoose.Schema<Patient, mongoose.Model<Patient, any, any, any, mongoose.Document<unknown, any, Patient> & Patient & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Patient, mongoose.Document<unknown, {}, mongoose.FlatRecord<Patient>> & mongoose.FlatRecord<Patient> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
