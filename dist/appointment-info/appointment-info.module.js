"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentInfoModule = void 0;
const common_1 = require("@nestjs/common");
const appointment_info_service_1 = require("./appointment-info.service");
const appointment_info_controller_1 = require("./appointment-info.controller");
const mongoose_1 = require("@nestjs/mongoose");
const appointment_1 = require("./schemas/appointment");
let AppointmentInfoModule = class AppointmentInfoModule {
};
exports.AppointmentInfoModule = AppointmentInfoModule;
exports.AppointmentInfoModule = AppointmentInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Appointment', schema: appointment_1.AppointmentSchema }])],
        providers: [appointment_info_service_1.AppointmentInfoService],
        controllers: [appointment_info_controller_1.AppointmentInfoController]
    })
], AppointmentInfoModule);
//# sourceMappingURL=appointment-info.module.js.map