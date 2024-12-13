import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
const {userid} = useParams()
  return (
    <div className='text-center text-3xl font-semibold py-8 bg-teal-400 text-white'>Profile of {userid.toUpperCase()}</div>
  )
}

export default User