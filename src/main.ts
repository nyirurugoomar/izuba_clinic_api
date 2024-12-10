import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Izuba clinic api')
    .setDescription('It Api for Clinic that handle registe,patient-info,apppontment-info')
    .setVersion('1.0')
    .addTag('Izuba clinic')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, documentFactory);
  app.enableCors();
  const PORT = process.env.PORT || 3004; 
  await app.listen(PORT)
  console.log(`Application is running on port ${PORT}`);
}
bootstrap();
