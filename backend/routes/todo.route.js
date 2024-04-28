import express from 'express';
import { addTodo, deleteTodo, getAllTodo } from '../controllers/todo.controller.js';
const todoRouter = express.Router();

todoRouter.post('/add-todo',addTodo);
todoRouter.get('/get-todos',getAllTodo);
todoRouter.delete('/delete-todo/:id',deleteTodo);
export default todoRouter;