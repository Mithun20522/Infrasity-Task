import React from 'react'
import ShowTodo from '../components/ShowTodo'

const Home = () => {
  return (
    <div>
        <h1 className='text-center mt-10 text-3xl font-bold text-purple-500'>TODO TASK INFRASITY</h1>
        <ShowTodo/>
    </div>
  )
}

export default Home