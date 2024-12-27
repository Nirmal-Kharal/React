import React, { useRef } from 'react'
import Card from './Card'


const Forground = () => {
  const ref = useRef(null)

  const data = [
    {
      desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendusillum ut voluptates sequi?",
    size:"0.4mb",
    close : false,
    tag :{isOpened:true , tagTitle:"Download Now " , tagColor:"green" },

    },
    {
      desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendusillum ut voluptates sequi?",
    size:"0.4mb",
    close : false,
    tag :{isOpened:false , tagTitle:"Download Now " , tagColor:"green" },

    },
    {
      desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendusillum ut voluptates sequi?",
    size:"0.4mb",
    close : true,
    tag :{isOpened:true , tagTitle:"Submit Now" , tagColor:"teal" },

    }
  ]
  return (
    <div ref={ref} className=" fixed inset-0  w-full h-full top-0 left-0 p-5  flex gap-5 z-[3] flex-wrap overflow-hidden">
      
{data.map((item,index)=>(
<Card reference={ref} data={item}/>
))}
     
    </div>
  )
}

export default Forground