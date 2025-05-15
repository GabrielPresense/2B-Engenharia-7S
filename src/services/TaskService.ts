import { Task, TaskStatus } from '../models/Task';
import { TaskRepository } from '../repositories/TaskRepository';

export class TaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async createTask(taskData: Partial<Task>): Promise<Task> {
    if (!taskData.title || !taskData.description) {
      throw new Error('Title and description are required');
    }

    return await this.taskRepository.createTask(taskData);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }

  async updateStatus(id: string, status: TaskStatus): Promise<Task> {
    if (!Object.values(TaskStatus).includes(status)) {
      throw new Error('Invalid status');
    }

    return await this.taskRepository.updateStatus(id, status);
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
} 