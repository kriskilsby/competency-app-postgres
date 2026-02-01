import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { EmployeeProjectExperience } from '../employee-project-experience/employee-project-experience.entity';
import { ClassificationValue } from '../classification-value/classification-value.entity';

@Entity({ name: 'experience_classification', schema: 'competency_data' })
@Unique(['experience', 'classification_value'])
export class ExperienceClassification {
  @PrimaryGeneratedColumn()
  ec_id: number;

  // 🔗 Employee project experience FK
  @ManyToOne(() => EmployeeProjectExperience, { nullable: false })
  @JoinColumn({ name: 'epe_id' })
  experience: EmployeeProjectExperience;

  // 🔗 Classification value FK
  @ManyToOne(() => ClassificationValue, { nullable: false })
  @JoinColumn({ name: 'cv_id' })
  classification_value: ClassificationValue;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
