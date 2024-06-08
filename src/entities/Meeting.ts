import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../entities/User';

@Entity('meetings')
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  start_day: number;

  @Column('int')
  end_day: number;

  @Column('int')
  user_id: number;

  @Column('int')
  room_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.meetings)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
