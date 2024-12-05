import React from 'react'
import Card from './Card'

const App = () => {
  let card =[
  {username :"nirmal"},
  {username :"usla"},
  {username :"naveen"},
  {username :"priya"},
  {username :"priyanka"},
  {username :"priyank"}]

  return (
   <>
 {card.map((obj,index)=> <Card  key ={index} card={obj} /> )}
   </>
  )
}

export default App
