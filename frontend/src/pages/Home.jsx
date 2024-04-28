import React from 'react'
import ShowTodo from '../components/ShowTodo'
import AddToDo from '../components/AddToDo'

const Home = () => {
  return (
    <div className='max-w-lg mx-auto'>
        <h1 className='text-center mt-10 text-3xl font-bold text-purple-500'>TODO TASK INFRASITY</h1>
        <AddToDo/>
        <ShowTodo/>
    </div>
  )
}

export default Home