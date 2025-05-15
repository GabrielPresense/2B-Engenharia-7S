import { Repository, EntityRepository } from 'typeorm';
import { Task } from '../models/Task';
import { AppDataSource } from '../server';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(task: Partial<Task>): Promise<Task> {
    const taskRepository = AppDataSource.getRepository(Task);
    const newTask = taskRepository.create(task);
    return await taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    const taskRepository = AppDataSource.getRepository(Task);
    return await taskRepository.find({
      order: {
        createdAt: 'DESC'
      }
    });
  }
} 