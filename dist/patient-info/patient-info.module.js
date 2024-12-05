"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientInfoModule = void 0;
const common_1 = require("@nestjs/common");
const patient_info_service_1 = require("./patient-info.service");
const patient_info_controller_1 = require("./patient-info.controller");
const mongoose_1 = require("@nestjs/mongoose");
const patient_1 = require("./schemas/patient");
let PatientInfoModule = class PatientInfoModule {
};
exports.PatientInfoModule = PatientInfoModule;
exports.PatientInfoModule = PatientInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Patient', schema: patient_1.PatientSchema }])],
        providers: [patient_info_service_1.PatientInfoService],
        controllers: [patient_info_controller_1.PatientInfoController]
    })
], PatientInfoModule);
//# sourceMappingURL=patient-info.module.js.map