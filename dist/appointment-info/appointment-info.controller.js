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
exports.AppointmentInfoController = void 0;
const common_1 = require("@nestjs/common");
const appointment_info_service_1 = require("./appointment-info.service");
const appointment_dto_1 = require("./dto/appointment.dto");
let AppointmentInfoController = class AppointmentInfoController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async appointment(register, dto) {
        const data = { ...dto, register: [register] };
        return this.appointmentService.appointmentInfo(data);
    }
};
exports.AppointmentInfoController = AppointmentInfoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('register')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, appointment_dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentInfoController.prototype, "appointment", null);
exports.AppointmentInfoController = AppointmentInfoController = __decorate([
    (0, common_1.Controller)('appointment-info'),
    __metadata("design:paramtypes", [appointment_info_service_1.AppointmentInfoService])
], AppointmentInfoController);
//# sourceMappingURL=appointment-info.controller.js.map