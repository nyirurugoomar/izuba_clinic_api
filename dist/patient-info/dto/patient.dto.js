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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientDto = void 0;
const class_validator_1 = require("class-validator");
class PatientDto {
}
exports.PatientDto = PatientDto;
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], PatientDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PatientDto.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "dob", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "occupation", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "emergencyContactName", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PatientDto.prototype, "emergencyPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "doctor", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "insuranceProvider", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PatientDto.prototype, "insurancePolicyNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "allergies", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "currentMedications", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "medicalHistory", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "pastMedical", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDto.prototype, "birthCertificate", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PatientDto.prototype, "identificationNumber", void 0);
//# sourceMappingURL=patient.dto.js.map