import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentInfoService } from './appointment-info.service';

describe('AppointmentInfoService', () => {
  let service: AppointmentInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentInfoService],
    }).compile();

    service = module.get<AppointmentInfoService>(AppointmentInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
