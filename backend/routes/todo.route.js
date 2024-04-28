import express from 'express';
import { addTodo } from '../controllers/todo.controller.js';
const todoRouter = express.Router();

todoRouter.post('/add-todo',addTodo);
export default todoRouter;