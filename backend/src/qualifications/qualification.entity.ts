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

@Entity({ name: 'qualifications' })
@Check(`q_type IN ('Academic','Professional','Other')`)
@Check(`q_year BETWEEN 1950 AND 2100`)
export class Qualification {
  @PrimaryGeneratedColumn()
  q_id: number;

  // 🔗 Employee FK
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'e_id' })
  employee: Employee;

  @Column({ length: 20 })
  q_type: 'Academic' | 'Professional' | 'Other';

  @Column({ length: 150 })
  q_name: string;

  @Column({ length: 100 })
  q_institution: string;

  @Column({ type: 'int' })
  q_year: number;

  @CreateDateColumn({ type: 'timestamp' })
  q_addDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  q_eReview: Date;

  @Column({ type: 'timestamp', nullable: true })
  q_mReview: Date | null;

  @Column({ type: 'boolean', default: true })
  q_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
