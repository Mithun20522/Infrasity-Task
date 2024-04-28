import express from 'express';
import { addTodo, getAllTodo } from '../controllers/todo.controller.js';
const todoRouter = express.Router();

todoRouter.post('/add-todo',addTodo);
todoRouter.get('/get-todos',getAllTodo);
export default todoRouter;