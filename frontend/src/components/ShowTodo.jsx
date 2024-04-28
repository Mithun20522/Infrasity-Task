import React, { useState } from 'react'
import toast from 'react-hot-toast';

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const ShowTodo = ({todo, onEdit}) => {

  const handleDelete = async() => {
    try {
      const res = await fetch(`http://localhost:8080/api/todo/delete-todo/${todo._id}`,{method:'DELETE'});
      const data = await res.json();
      if(res.ok){
        toast.success(data.message);
        return;
      }
  
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const handleEdit = () => {
    onEdit(todo);
  };

  return (
    <div className='max-w-lg bg-gray-100 rounded-lg sm:mx-auto border p-3 mx-3 mt-5'>
      <div className='flex justify-between items-center px-2'>
        <p className='text-sm font-semibold'>{todo.todo}</p>
        <div className='flex items-center gap-5 text-2xl'>
          <MdEdit onClick={handleEdit} className='w-8 h-8 p-1 hover:bg-slate-300 text-yellow-500 cursor-pointer rounded-full'/>
          <MdDelete onClick={handleDelete} className='w-8 h-8 p-1 hover:bg-slate-300 text-red-500 cursor-pointer rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default ShowTodo