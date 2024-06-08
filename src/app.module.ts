import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from '../src/entities/User';
import { Meeting } from '../src/entities/meeting';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Meeting],
      ssl: true,
    }),
    TypeOrmModule.forFeature([User, Meeting]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
