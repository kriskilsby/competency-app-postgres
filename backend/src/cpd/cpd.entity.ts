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

@Entity({ name: 'cpd', schema: 'competency_data' })
@Check(`cpd_year BETWEEN 1950 AND 2100`)
export class Cpd {
  @PrimaryGeneratedColumn()
  cpd_id: number;

  // 🔗 Foreign key → employee
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'e_id' })
  employee: Employee;

  @Column({ length: 200 })
  cpd_name: string;

  @Column({ type: 'int' })
  cpd_year: number;

  @CreateDateColumn({ type: 'timestamp' })
  cpd_addDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  cpd_eReview: Date;

  @Column({ type: 'timestamp', nullable: true })
  cpd_mReview: Date | null;

  @Column({ type: 'boolean', default: true })
  cpd_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
