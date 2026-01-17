// backend/src/employees/employees.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { Employee } from './employee.entity';
import { Qualification } from '../qualifications/qualification.entity';
import { EmployeeProjectExperience } from '../employee-project-experience/employee-project-experience.entity';
import { Cpd } from '../cpd/cpd.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Employee,
      Qualification,
      EmployeeProjectExperience,
      Cpd,
    ]),
  ],
  controllers: [EmployeesController],
  providers: [],
})
export class EmployeesModule {}
