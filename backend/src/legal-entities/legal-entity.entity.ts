import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'legal_entity' })
export class LegalEntity {
  @PrimaryGeneratedColumn()
  le_id: number;

  @Column({ length: 50, unique: true })
  le_name: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'le_adddate',
  })
  le_addDate: Date;

  @Column({
    type: 'boolean',
    default: true,
  })
  le_active: boolean;

  @Column({
    length: 20,
    default: 'temp',
  })
  data_origin: string;
}
