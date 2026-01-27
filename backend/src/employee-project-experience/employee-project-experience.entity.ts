import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Check,
} from 'typeorm';

import { Employee } from '../employees/employee.entity';
import { ProjectMaster } from '../project-master/project-master.entity';

@Entity({ name: 'employee_project_experience' })
@Check(`epe_start BETWEEN 1950 AND 2100`)
@Check(`epe_end BETWEEN 1950 AND 2100 OR epe_end IS NULL`)
@Check(`epe_end IS NULL OR epe_end >= epe_start`)
export class EmployeeProjectExperience {
  @PrimaryGeneratedColumn()
  epe_id: number;

  // 🔗 Employee (required)
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'e_id' })
  employee: Employee;

  // 🔗 Canonical project (optional)
  @ManyToOne(() => ProjectMaster, { nullable: true })
  @JoinColumn({ name: 'pm_id' })
  project: ProjectMaster | null;

  // 🔗 Optional primary sector reference
  @Column({ type: 'int', nullable: true })
  ps_id: number | null;

  @Column({ length: 150 })
  epe_service: string;

  @Column({ type: 'int' })
  epe_start: number;

  @Column({ type: 'int', nullable: true })
  epe_end: number | null;

  @Column({ type: 'int', nullable: true })
  epe_contract_value: number | null;

  @Column({ length: 50, nullable: true })
  epe_stages: string | null;

  @Column({ type: 'boolean', default: false })
  epe_high_risk: boolean;

  @Column({ length: 150 })
  epe_contract_type: string;

  @Column({ length: 50, default: 'TBC' })
  epe_gia: string;

  @Column({ type: 'text', default: 'TBC' })
  epe_description_1: string;

  @Column({ type: 'text', default: 'TBC' })
  epe_description_2: string;

  @Column({ type: 'text', default: 'TBC' })
  epe_description_3: string;

  @Column({ type: 'text', nullable: true })
  epe_notes: string | null;

  @CreateDateColumn({ type: 'timestamp' })
  epe_added_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  epe_employee_reviewed_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  epe_manager_reviewed_at: Date | null;

  @Column({ type: 'boolean', default: true })
  epe_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;

  @Column({ type: 'int', nullable: true })
  temp_sort: number | null;
}
