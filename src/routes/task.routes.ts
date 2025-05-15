import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.post('/', taskController.create.bind(taskController));
taskRouter.get('/', taskController.findAll.bind(taskController));

export default taskRouter; 