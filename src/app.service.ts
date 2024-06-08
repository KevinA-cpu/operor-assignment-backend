import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(offset: number, limit: number): Promise<User[]> {
    try {
      const users = await this.usersRepository.find({
        skip: offset,
        take: limit,
        relations: ['meetings'],
      });

      users.forEach((user) => {
        const meetingDays = new Set();
        user.meetings.forEach((meeting) => {
          for (let day = meeting.start_day; day <= meeting.end_day; day++) {
            meetingDays.add(day);
          }
        });
        user['days_without_meetings'] = user.days - meetingDays.size;
      });

      return users;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }
}
