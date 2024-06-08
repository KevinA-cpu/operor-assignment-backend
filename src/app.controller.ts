import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<User[]> {
    return this.appService.getUsers(offset, limit);
  }
}
