import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/AuthModule';
import { TaskModule } from './modules/TaskModule';
import { User } from './models/User';
import { Task } from './models/Task';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: false,
      entities: [User, Task],
    }),
    AuthModule,
    TaskModule,
  ],
})
export class AppModule {} 