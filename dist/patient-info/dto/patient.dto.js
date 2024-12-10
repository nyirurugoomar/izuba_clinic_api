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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PatientDto {
}
exports.PatientDto = PatientDto;
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Full name',
        example: 'John Smith'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email address',
        example: 'john.smith@example.com'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Phone number',
        example: '+1 123-456-7890'
    }),
    __metadata("design:type", Number)
], PatientDto.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date of birth',
        example: '2000-01-01'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "dob", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Gender',
        example: 'Male'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Address',
        example: 'kigali street'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Occupation',
        example: 'Teacher'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "occupation", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Emergency contact name',
        example: 'Mrs. Smith'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "emergencyContactName", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Emergency contact phone number',
        example: '+255 123-456-7890'
    }),
    __metadata("design:type", Number)
], PatientDto.prototype, "emergencyPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor',
        example: 'Dr. John Doe'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "doctor", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Insurance provider',
        example: 'Healthcare Insurance'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "insuranceProvider", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Insurance policy number',
        example: '123456789'
    }),
    __metadata("design:type", Number)
], PatientDto.prototype, "insurancePolicyNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Allergies',
        example: 'Pollen, Dust allergies'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "allergies", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Current medications',
        example: 'Aspirin, ibuprofen'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "currentMedications", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Medical history',
        example: 'Hypertension, diabetes'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "medicalHistory", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Past medical history',
        example: 'Heart attack, stroke'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "pastMedical", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Birth certificate',
        example: '1234567890'
    }),
    __metadata("design:type", String)
], PatientDto.prototype, "birthCertificate", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Identification number',
        example: '1234567890'
    }),
    __metadata("design:type", Number)
], PatientDto.prototype, "identificationNumber", void 0);
//# sourceMappingURL=patient.dto.js.map