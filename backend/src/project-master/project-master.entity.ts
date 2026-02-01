import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity({ name: 'project_master', schema: 'competency_data' })
export class ProjectMaster {
  @PrimaryGeneratedColumn()
  pm_id: number;

  @Column({ length: 150 })
  pm_name: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  pm_location: string | null;

  @Column({ type: 'varchar', length: 150, nullable: true })
  pm_client: string | null;

  @Column({ type: 'text', nullable: true })
  pm_notes: string | null;

  @Column({ type: 'boolean', default: true })
  pm_active: boolean;

  @Column({ type: 'varchar', length: 20, default: 'temp' })
  data_origin: string;
}
