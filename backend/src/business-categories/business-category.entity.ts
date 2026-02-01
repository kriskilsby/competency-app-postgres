import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'business_categories', schema: 'competency_data' })
export class BusinessCategory {
  @PrimaryGeneratedColumn()
  bc_id: number;

  @Column({ length: 255, unique: true })
  bc_name: string;

  @CreateDateColumn({ type: 'timestamp' })
  bc_addDate: Date;

  @Column({ type: 'bit', default: true })
  bc_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
