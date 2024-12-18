import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col '>
      <h1 className='text-3xl font-bold text-center text-white uppercase mt-8'>Todo using Redux</h1>
   <AddTodo  />
   <Todos />
    </div>
  )
}

export default App

