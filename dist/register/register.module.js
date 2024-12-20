"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterModule = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const register_controller_1 = require("./register.controller");
const mongoose_1 = require("@nestjs/mongoose");
const register_schema_1 = require("./schemas/register.schema");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const passport_1 = require("@nestjs/passport");
let RegisterModule = class RegisterModule {
};
exports.RegisterModule = RegisterModule;
exports.RegisterModule = RegisterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Register', schema: register_schema_1.RegisterSchema }]),
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
                }),
            }),
            passport_1.PassportModule
        ],
        providers: [register_service_1.RegisterService, jwt_strategy_1.JwtStrategy],
        controllers: [register_controller_1.RegisterController],
    })
], RegisterModule);
//# sourceMappingURL=register.module.js.map