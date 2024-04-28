import React from 'react'

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const ShowTodo = () => {
  return (
    <div className='max-w-lg bg-gray-100 rounded-lg sm:mx-auto border p-7 mx-5 mt-5'>
      <div className='flex justify-between items-center px-2'>
        <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet.</p>
        <div className='flex items-center gap-5 text-2xl'>
          <MdEdit className='w-8 h-8 p-1 hover:bg-slate-300 text-yellow-500 cursor-pointer rounded-full'/>
          <MdDelete className='w-8 h-8 p-1 hover:bg-slate-300 text-red-500 cursor-pointer rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default ShowTodo