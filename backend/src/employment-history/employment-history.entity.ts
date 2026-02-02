import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Check,
} from 'typeorm';

import { Employee } from '../employees/employee.entity';

@Entity({ name: 'employment_history', schema: 'competency_data' })
@Check(`eh_start BETWEEN 1950 AND 2100`)
@Check(`eh_end BETWEEN 1950 AND 2100 OR eh_end IS NULL`)
@Check(`eh_end IS NULL OR eh_end >= eh_start`)
export class EmploymentHistory {
  @PrimaryGeneratedColumn()
  eh_id: number;

  // Employee FK
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'e_id' })
  employee: Employee;

  @Column({ length: 100 })
  eh_company: string;

  @Column({ length: 100 })
  eh_location: string;

  @Column({ length: 100 })
  eh_role: string;

  @Column({ type: 'int' })
  eh_start: number;

  @Column({ type: 'int', nullable: true })
  eh_end: number | null;

  @CreateDateColumn({ type: 'timestamp' })
  eh_addDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  eh_eReview: Date;

  @Column({ type: 'timestamp', nullable: true })
  eh_mReview: Date | null;

  @Column({ type: 'boolean', default: true })
  eh_active: boolean;

  @Column({ type: 'varchar', length: 20, default: 'temp' })
  data_origin: string;
}
