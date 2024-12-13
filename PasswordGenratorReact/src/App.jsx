import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("") 
// <---------------------- useCallback ----------->
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()_+{}?/"
    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() *str.length+1)
      pass += str.charAt(ch)
    }
    setPassword(pass)
  }  , [length, num , char , setPassword]) 

  // <---------------------- useEffect ----------->
  useEffect(()=>{
passwordGenerator()
  },[length, num , char , setPassword])

  // <---------------------- useRef ----------->
  const passwordRef  = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
 window.navigator.clipboard.writeText(password)
 alert("password was copied to clipboard")
  },[password])

 

 

  return (
   
     <div className='w-full max-w-screen-md mx-auto   px-4 py-2 bg-violet-800 rounded-lg my-11  shadow-md   text-xl'>
      <h1 className='text-center text-2xl  my-2 text-white '>Password generator</h1>
       <div className='flex shadow-lg mb-4 rounded-md overflow-hidden text-red-500   '>
        <input type="text"
        value = {password}
        className='outline-none w-full py-1 px-3  '
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button   onClick={copyToClipboard} className='px-5 py-0.5  bg-teal-400 shadow-md font-semibold text-sm outline  text-white  hover:bg-teal-700  '>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2 text-white '>
        <div className='flex items-center gap-x-1'>
         <input 
         type="range"
         min={6}
         max={50}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>setLength(e.target.value)}
          />
          <label className='text-sm' >Length({length})</label>
        </div>
        <div className="flex items-center gap-x-1 text-white ">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 text-white ">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput ">Characters</label>
      </div>
        
       </div>
     </div>
      
   
  )
}


export default App

