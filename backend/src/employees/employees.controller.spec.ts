// employees.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Employee } from './employee.entity';
import { Qualification } from '../qualifications/qualification.entity';
import { EmployeeProjectExperience } from '../employee-project-experience/employee-project-experience.entity';
import { Cpd } from '../cpd/cpd.entity';

describe('EmployeesController', () => {
  let controller: EmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [
        { provide: getRepositoryToken(Employee), useValue: {} },
        { provide: getRepositoryToken(Qualification), useValue: {} },
        { provide: getRepositoryToken(EmployeeProjectExperience), useValue: {} },
        { provide: getRepositoryToken(Cpd), useValue: {} },
      ],
    }).compile();

    controller = module.get<EmployeesController>(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
