import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Employee } from '../employees/employee.entity';

@Entity({ name: 'reviewLog', schema: 'competency_data' })
export class ReviewLog {
  @PrimaryGeneratedColumn()
  rl_id: number;

  // 🔗 Employee who owns the record
  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'e_id' })
  employee: Employee;

  // Table being updated (employee, qualifications, cpd, etc.)
  @Column({ length: 50 })
  table_name: string;

  // Primary key of updated record
  @Column()
  record_id: number;

  // Column / field updated
  @Column({ length: 50 })
  section: string;

  @Column({ type: 'text', nullable: true })
  old_value: string | null;

  @Column({ type: 'text', nullable: true })
  new_value: string | null;

  // Who made the update (employee.norseid or manager.norseid)
  @Column({ length: 50 })
  updated_by: string;

  // When update happened
  @CreateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  // Who reviewed the change
  @Column({ type: 'varchar', length: 50, nullable: true })
  review_by: string | null;

  // When review happened
  @Column({ type: 'timestamp', nullable: true })
  review_at: Date | null;

  // Pending / Reviewed
  @Column({ type: 'varchar', length: 20, default: 'Pending' })
  review_status: string;

  // Optional notes
  @Column({ type: 'text', nullable: true })
  comment: string | null;

  @Column({ type: 'varchar', length: 20, default: 'temp' })
  data_origin: string;
}
