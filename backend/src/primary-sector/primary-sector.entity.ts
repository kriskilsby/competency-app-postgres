import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'primary_sector', schema: 'competency_data' })
export class PrimarySector {
  @PrimaryGeneratedColumn()
  ps_id: number;

  @Column({ length: 150, unique: true })
  ps_name: string;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
