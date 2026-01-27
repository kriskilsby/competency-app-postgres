import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { BusinessCategory } from '../business-categories/business-category.entity';

@Entity({ name: 'category_match' })
@Unique(['employee', 'businessCategory'])
export class CategoryMatch {
  @PrimaryGeneratedColumn()
  cm_id: number;

  @ManyToOne(() => Employee, { nullable: false })
  @JoinColumn({ name: 'e_id' })
  employee: Employee;

  @ManyToOne(() => BusinessCategory, { nullable: false })
  @JoinColumn({ name: 'bc_id' })
  businessCategory: BusinessCategory;

  @CreateDateColumn({ type: 'timestamp' })
  cm_addDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  cm_eReview: Date;

  @Column({ type: 'timestamp', nullable: true })
  cm_mReview: Date | null;

  @Column({ type: 'boolean', default: true })
  cm_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
