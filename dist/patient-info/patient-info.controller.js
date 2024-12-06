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
exports.PatientInfoController = void 0;
const common_1 = require("@nestjs/common");
const patient_info_service_1 = require("./patient-info.service");
const patient_dto_1 = require("./dto/patient.dto");
let PatientInfoController = class PatientInfoController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async patient(register, dto) {
        const data = { ...dto, register: [register] };
        return this.patientService.patientInfo(dto);
    }
};
exports.PatientInfoController = PatientInfoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('register')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, patient_dto_1.PatientDto]),
    __metadata("design:returntype", Promise)
], PatientInfoController.prototype, "patient", null);
exports.PatientInfoController = PatientInfoController = __decorate([
    (0, common_1.Controller)('patient-info'),
    __metadata("design:paramtypes", [patient_info_service_1.PatientInfoService])
], PatientInfoController);
//# sourceMappingURL=patient-info.controller.js.map