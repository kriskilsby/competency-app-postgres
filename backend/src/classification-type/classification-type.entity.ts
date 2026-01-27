import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'classification_type' })
export class ClassificationType {
  @PrimaryGeneratedColumn()
  ct_id: number;

  @Column({ length: 100, unique: true })
  ct_name: string;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
