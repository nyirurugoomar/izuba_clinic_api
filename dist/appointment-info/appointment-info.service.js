"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentInfoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const appointment_1 = require("./schemas/appointment");
let AppointmentInfoService = class AppointmentInfoService {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }
    async appointmentInfo(dto) {
        try {
            const newAppointment = await this.appointmentModel.create(dto);
            const populatedAppointment = await this.appointmentModel
                .findById(newAppointment._id)
                .populate('register', 'email fullname')
                .exec();
            return {
                message: 'Appointment information saved successfully!',
                appointment: populatedAppointment,
            };
        }
        catch (error) {
            throw new Error(`Failed to save appointment information: ${error.message}`);
        }
    }
    async getAllAppointments() {
        try {
            const appointments = await this.appointmentModel
                .find()
                .populate('register', 'email fullname')
                .exec();
            return appointments;
        }
        catch (error) {
            throw new Error(`Failed to retrieve appointments: ${error.message}`);
        }
    }
};
exports.AppointmentInfoService = AppointmentInfoService;
exports.AppointmentInfoService = AppointmentInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(appointment_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppointmentInfoService);
//# sourceMappingURL=appointment-info.service.js.map