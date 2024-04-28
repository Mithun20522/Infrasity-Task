import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDb } from './db/connectMongoDB.js';
import todoRouter from './routes/todo.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

connectDb(MONGODB_URL);

app.use('/api/todo', todoRouter);


app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));