import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import taskRouter from './routes/task.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/models/*.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
});

const PORT = process.env.PORT || 3000;

// Rotas
app.use('/tasks', taskRouter);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log('Error connecting to database:', error)); 