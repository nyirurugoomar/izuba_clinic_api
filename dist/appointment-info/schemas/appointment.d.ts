import mongoose from "mongoose";
export declare class Appointment {
    register: mongoose.Types.ObjectId[];
    doctor: string;
    reasonAppointment: string;
    additionComment?: string;
    date: Date;
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
