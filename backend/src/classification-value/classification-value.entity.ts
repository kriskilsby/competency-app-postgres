import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { ClassificationType } from '../classification-type/classification-type.entity';

@Entity({ name: 'classification_value' })
@Unique(['classification_type', 'type_name'])
export class ClassificationValue {
  @PrimaryGeneratedColumn()
  cv_id: number;

  // 🔗 Foreign key → classification_type
  @ManyToOne(() => ClassificationType, { nullable: false })
  @JoinColumn({ name: 'ct_id' })
  classification_type: ClassificationType;

  @Column({ length: 150 })
  type_name: string;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
