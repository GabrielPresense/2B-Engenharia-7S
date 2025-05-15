import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskStatus } from '../models/Task';

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

  async updateStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({ message: 'Status is required' });
      }

      const task = await this.taskService.updateStatus(id, status as TaskStatus);
      return res.status(200).json(task);
    } catch (error) {
      if (error.message === 'Task not found') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.taskService.delete(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === 'Task not found') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error deleting task' });
    }
  }
} 