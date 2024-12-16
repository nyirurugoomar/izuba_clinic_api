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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const register_schema_1 = require("./schemas/register.schema");
const mongoose = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let RegisterService = class RegisterService {
    constructor(registerModel, jwtService) {
        this.registerModel = registerModel;
        this.jwtService = jwtService;
    }
    async registerUser(dto) {
        try {
            const newRegister = await this.registerModel.create(dto);
            const tokenPayload = { email: newRegister.email, id: newRegister._id, fullname: newRegister.fullname };
            const token = this.jwtService.sign(tokenPayload);
            return {
                message: 'User registered successfully!',
                token,
            };
        }
        catch (error) {
            throw new Error(`Registration failed: ${error.message}`);
        }
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(register_schema_1.Register.name)),
    __metadata("design:paramtypes", [mongoose.Model, jwt_1.JwtService])
], RegisterService);
//# sourceMappingURL=register.service.js.map