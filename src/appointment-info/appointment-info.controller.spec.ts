import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentInfoController } from './appointment-info.controller';

describe('AppointmentInfoController', () => {
  let controller: AppointmentInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentInfoController],
    }).compile();

    controller = module.get<AppointmentInfoController>(AppointmentInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
