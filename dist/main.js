"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Izuba clinic api')
        .setDescription('It Api for Clinic that handle registe,patient-info,apppontment-info')
        .setVersion('1.0')
        .addTag('Izuba clinic')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, documentFactory);
    app.enableCors();
    const PORT = process.env.PORT || 3004;
    await app.listen(PORT);
    console.log(`Application is running on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map