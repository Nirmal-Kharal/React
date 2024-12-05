import React from 'react'

const Card = ({card}) => {
    const {username}= card
  return (
    <div className='w-full h-screen flex flex-row  gap-3 flex-wrap'  >
    <div  className=" max-w-xs overflow-hidden rounded-lg shadow-lg ">
<img class="object-cover w-full h-48" src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower and sky"/>
<div class="px-6 py-4">
  <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{username}</h4>
  <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
</div>
</div>
  </div>
  )
}

export default Card
