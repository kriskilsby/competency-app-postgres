// employees.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './employee.entity';
import { Qualification } from '../qualifications/qualification.entity';
import { EmployeeProjectExperience } from '../employee-project-experience/employee-project-experience.entity';
import { Cpd } from '../cpd/cpd.entity';

describe('EmployeesService', () => {
  let service: EmployeesService;

  const mockEmployeeRepo = {
    find: jest.fn(),
  };

  const mockQualRepo = {
    count: jest.fn(),
  };

  const mockProjRepo = {
    count: jest.fn(),
  };

  const mockCpdRepo = {
    count: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesService,
        { provide: getRepositoryToken(Employee), useValue: mockEmployeeRepo },
        { provide: getRepositoryToken(Qualification), useValue: mockQualRepo },
        { provide: getRepositoryToken(EmployeeProjectExperience), useValue: mockProjRepo },
        { provide: getRepositoryToken(Cpd), useValue: mockCpdRepo },
      ],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return aggregated employee summary', async () => {
    mockEmployeeRepo.find.mockResolvedValue([
      {
        e_id: 1,
        e_fname: 'John',
        e_lname: 'Doe',
        e_job: 'Engineer',
        legal_entity: { le_name: 'UK Ltd' },
        discipline: { d_name: 'Software' },
      },
    ]);

    mockProjRepo.count.mockResolvedValue(2);
    mockQualRepo.count.mockResolvedValue(1);
    mockCpdRepo.count.mockResolvedValue(3);

    const result = await service.getEmployeeSummary();

    expect(result).toEqual([
      {
        e_id: 1,
        firstName: 'John',
        lastName: 'Doe',
        job: 'Engineer',
        legalEntity: 'UK Ltd',
        discipline: 'Software',
        projectsCount: 2,
        qualificationsCount: 1,
        cpdCount: 3,
      },
    ]);

    expect(mockEmployeeRepo.find).toHaveBeenCalled();
    expect(mockProjRepo.count).toHaveBeenCalled();
    expect(mockQualRepo.count).toHaveBeenCalled();
    expect(mockCpdRepo.count).toHaveBeenCalled();
  });

  it('should return empty array if no employees exist', async () => {
    mockEmployeeRepo.find.mockResolvedValue([]);

    const result = await service.getEmployeeSummary();

    expect(result).toEqual([]);
  });
});
