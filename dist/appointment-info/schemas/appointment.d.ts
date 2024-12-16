import mongoose from "mongoose";
export declare class Appointment {
    doctors: string;
    reasonAppointment: string;
    additionComment?: string;
    date: Date;
    register: mongoose.Types.ObjectId;
}
export declare const AppointmentSchema: mongoose.Schema<Appointment, mongoose.Model<Appointment, any, any, any, mongoose.Document<unknown, any, Appointment> & Appointment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Appointment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Appointment>> & mongoose.FlatRecord<Appointment> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
