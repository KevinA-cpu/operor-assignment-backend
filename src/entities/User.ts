import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Meeting } from '../entities/meeting';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 20 })
  gender: string;

  @Column({ length: 50 })
  ip_address: string;

  @Column('int')
  days: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Meeting, (meeting) => meeting.user)
  meetings: Meeting[];
}
