import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { LegalEntity } from '../legal-entities/legal-entity.entity';
import { Discipline } from '../disciplines/discipline.entity';

@Entity({ name: 'employee' })
export class Employee {
  @PrimaryGeneratedColumn()
  e_id: number;

  @Column({ type: 'text', nullable: true })
  e_norseid: string | null;

  // 🔹 Foreign key → legal_entity
  @ManyToOne(() => LegalEntity, { nullable: false })
  @JoinColumn({ name: 'le_id' })
  legal_entity: LegalEntity;

  // 🔹 Foreign key → discipline
  @ManyToOne(() => Discipline, { nullable: true })
  @JoinColumn({ name: 'd_id' })
  discipline: Discipline | null;

  @Column({ length: 100 })
  e_fname: string;

  @Column({ length: 100 })
  e_lname: string;

  @Column({ length: 150 })
  e_job: string;

  @Column({ type: 'date', nullable: true })
  e_start: Date | null;

  @Column({ length: 255 })
  e_email: string;

  @Column({ length: 50 })
  e_contactno: string;

  @Column({ type: 'text', nullable: true })
  e_note: string | null;

  @CreateDateColumn({ type: 'timestamp', name: 'e_addDate' })
  e_addDate: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'e_eReview' })
  e_eReview: Date;

  @Column({ type: 'timestamp', name: 'e_mReview', nullable: true })
  e_mReview: Date | null;

  @Column({ type: 'boolean', default: true })
  e_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
