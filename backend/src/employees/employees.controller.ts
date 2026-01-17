// backend/src/employees/employees.controller.ts
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { Qualification } from '../qualifications/qualification.entity';
import { EmployeeProjectExperience } from '../employee-project-experience/employee-project-experience.entity';
import { Cpd } from '../cpd/cpd.entity';

@Controller('employees')
export class EmployeesController {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
    @InjectRepository(Qualification)
    private readonly qualRepo: Repository<Qualification>,
    @InjectRepository(EmployeeProjectExperience)
    private readonly projRepo: Repository<EmployeeProjectExperience>,
    @InjectRepository(Cpd)
    private readonly cpdRepo: Repository<Cpd>,
  ) {}

  @Get()
  async getAllEmployees() {
    // Get all employees first
    const employees = await this.employeeRepo.find({
      relations: ['legal_entity', 'discipline'],
    });

    // Map employees to include counts
    const result = await Promise.all(
      employees.map(async (e) => {
        const projectsCount = await this.projRepo.count({
          where: { employee: { e_id: e.e_id } },
        });
        const qualificationsCount = await this.qualRepo.count({
          where: { employee: { e_id: e.e_id } },
        });
        const cpdCount = await this.cpdRepo.count({
          where: { employee: { e_id: e.e_id } },
        });

        return {
          e_id: e.e_id,
          firstName: e.e_fname,
          lastName: e.e_lname,
          job: e.e_job,
          legalEntity: e.legal_entity?.le_name || null,
          discipline: e.discipline?.d_name || null,
          projectsCount,
          qualificationsCount,
          cpdCount,
        };
      }),
    );

    return result;
  }
}
