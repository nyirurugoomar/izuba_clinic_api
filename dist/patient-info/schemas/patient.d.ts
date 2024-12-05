export declare class Patient {
    fullnam: string;
    email: string;
    number: number;
    dob: string;
    gender: string;
    address: string;
    occupation: string;
    emergencyContactName: string;
    emergencyPhoneNumber: number;
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
export declare const PatientSchema: import("mongoose").Schema<Patient, import("mongoose").Model<Patient, any, any, any, import("mongoose").Document<unknown, any, Patient> & Patient & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Patient, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Patient>> & import("mongoose").FlatRecord<Patient> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
