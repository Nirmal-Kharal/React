import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("black")
  return (
    <div className='w-full h-screen duration-150' style = {{backgroundColor: color}} >
 <div className='flex flex-wrap item-center  gap-9  justify center items-center px-2  fixed bottom-11'>
 <div className='flex flex-wrap  gap-9 justify-center bg-white px-2 py-2 rounded-full'>
  <button onClick={()=>setColor("red")} className='px-4 py-2 bg-red-600 rounded-full'>Red</button>
  <button onClick={()=>setColor("green")} className='px-4 py-2 bg-green-600 rounded-full'>Green</button>
  <button onClick={()=>setColor("blue")} className='px-4 py-2 bg-blue-600 rounded-full'>Blue</button>
  <button onClick={()=>setColor("teal")} className='px-4 py-2 bg-teal-600 rounded-full'>Teal</button>
  <button onClick={()=>setColor("Orange")} className='px-4 py-2 bg-orange-600 rounded-full'>Orange</button>
  <button onClick={()=>setColor("pink")} className='px-4 py-2 bg-pink-600 rounded-full'>Pink</button>
 </div>
 </div>
      
    </div>
  )
}

export default App

