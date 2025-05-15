import { Task } from '../models/Task';
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
} 