import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'discipline', schema: 'competency_data' })
export class Discipline {
  @PrimaryGeneratedColumn()
  d_id: number;

  @Column({ length: 100, unique: true })
  d_name: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'd_adddate',
  })
  d_addDate: Date;

  @Column({
    type: 'boolean',
    default: true,
  })
  d_active: boolean;

  @Column({
    length: 20,
    default: 'temp',
  })
  data_origin: string;
}
