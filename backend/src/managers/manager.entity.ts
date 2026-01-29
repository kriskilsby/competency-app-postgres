import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { LegalEntity } from '../legal-entities/legal-entity.entity';
import { Discipline } from '../disciplines/discipline.entity';

@Entity({ name: 'manager' })
export class Manager {
  @PrimaryGeneratedColumn()
  m_id: number;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: true })
  m_norseid: string | null;

  @Column({ type: 'varchar', length: 100 })
  m_fname: string;

  @Column({ type: 'varchar', length: 100 })
  m_lname: string;

  @Column({ type: 'varchar', length: 150 })
  m_job: string;

  @Column({ type: 'varchar', length: 255 })
  m_email: string;

  // 🔗 Optional FK → legal_entity
  @ManyToOne(() => LegalEntity, { nullable: true })
  @JoinColumn({ name: 'le_id' })
  legal_entity: LegalEntity | null;

  // 🔗 Optional FK → discipline
  @ManyToOne(() => Discipline, { nullable: true })
  @JoinColumn({ name: 'd_id' })
  discipline: Discipline | null;

  @Column({ type: 'boolean', default: true })
  m_active: boolean;

  @Column({ length: 20, default: 'temp' })
  data_origin: string;
}
