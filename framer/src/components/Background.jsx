import React from 'react'

const Background = () => {
  return (
    <div className='h-screen fixed w-full z-[2]'>
    <div className="text-zinc-600 w-full absolute top-[10%]  flex justify-center text-xl font-semibold leading-none">Document</div>
    <h1 className=" absolute text-[10vw] font-semibold leading-none tracking-tight text-zinc-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      DOCS.
    </h1>
  </div>
  )
}

export default Background