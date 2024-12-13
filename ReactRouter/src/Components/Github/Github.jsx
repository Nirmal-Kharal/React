import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
 fetch('https://api.github.com/users/Nirmal-Kharal')
 .then((response)=>response.json())
 .then((data)=>{setData(data)
   console.log(data)
 
 })
 .catch(error=>console.log('Error:', error))
 
}, [])
  return (
    
    <div className='text-center text-4xl bg-teal-700 py-9 text-white '>Github Followers : {data.followers}
    
    </div>
  )
}

export default Github