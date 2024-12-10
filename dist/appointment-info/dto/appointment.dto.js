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
exports.AppointmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AppointmentDto {
}
exports.AppointmentDto = AppointmentDto;
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Doctor name',
        example: 'Dr smith'
    }),
    __metadata("design:type", String)
], AppointmentDto.prototype, "doctors", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Reason why you want to make appointment',
        example: 'Sick'
    }),
    __metadata("design:type", String)
], AppointmentDto.prototype, "reasonAppointment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Comment why you want to make appointment',
        example: 'Last nigh i was not feeling good'
    }),
    __metadata("design:type", String)
], AppointmentDto.prototype, "additionComment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date',
        example: '2001/4/2'
    }),
    __metadata("design:type", Date)
], AppointmentDto.prototype, "Date", void 0);
//# sourceMappingURL=appointment.dto.js.map