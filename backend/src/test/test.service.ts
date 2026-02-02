import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees/employee.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  async getEmployees() {
    const sql = this.employeeRepo
      .createQueryBuilder('e')
      .select()
      .getSql();

    console.log('🧪 Generated SQL:', sql);

    return this.employeeRepo.find({ take: 5 });
  }
}
