import React, { useEffect, useState } from 'react'
import ShowTodo from '../components/ShowTodo'
import AddToDo from '../components/AddToDo'
import {Toaster} from 'react-hot-toast';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    getTodos();
  }, [todos]);

  const getTodos = async () => {
    try {
      const res = await fetch('https://infrasity-task.onrender.com/api/todo/get-todos', { method: 'GET' });
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };


  const handleEditTodo = (todo) => {
    setEditTodo(todo);
  };

  const handleAddOrUpdateTodo = () => {
    getTodos(); 
    setEditTodo(null);
  };



  return (
    <div className='max-w-lg mx-auto p-3'>
        <h1 className='text-center mt-10 text-3xl font-bold text-purple-500'>TODO TASK INFRASITY</h1>
        <AddToDo editTodo={editTodo} onAddOrUpdate={handleAddOrUpdateTodo} />
        <div className='bg-slate-400 p-5 mt-10 overflow-y-auto max-h-[50vh] rounded-md'>
        {
          todos && todos.length > 0 ? todos.map((item) => (
            <ShowTodo key={item._id} todo={item} onEdit={handleEditTodo} />
          )) : <h1 className='text-center text-xl text-yellow-400 font-bold'>You have no todo task yet</h1>
        }
        </div>
        <Toaster/>
    </div>
  )
}

export default Home