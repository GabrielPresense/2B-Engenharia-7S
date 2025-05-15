import { Repository, EntityRepository } from 'typeorm';
import { Task, TaskStatus } from '../models/Task';
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

  async findById(id: string): Promise<Task | null> {
    const taskRepository = AppDataSource.getRepository(Task);
    return await taskRepository.findOne({ where: { id } });
  }

  async updateStatus(id: string, status: TaskStatus): Promise<Task> {
    const taskRepository = AppDataSource.getRepository(Task);
    const task = await this.findById(id);
    
    if (!task) {
      throw new Error('Task not found');
    }

    task.status = status;
    return await taskRepository.save(task);
  }

  async delete(id: string): Promise<void> {
    const taskRepository = AppDataSource.getRepository(Task);
    const task = await this.findById(id);
    
    if (!task) {
      throw new Error('Task not found');
    }

    await taskRepository.remove(task);
  }
} 