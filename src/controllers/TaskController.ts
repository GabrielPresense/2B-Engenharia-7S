import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

export class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const task = await this.taskService.createTask(req.body);
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await this.taskService.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching tasks' });
    }
  }
} 