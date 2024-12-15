import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div className='w-full h-screen  flex-col flex items-center justify-center bg-gray-600 text-white'>
        <h1>React is IMportant</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App

