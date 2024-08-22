import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

function SecondPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8'>
        <p className='text-5xl font-semibold'>Latest & Greatest</p>
        <p className='text-xl font-semibold'>"Unveil the Latest in Football Gear—Where Innovation Meets Performance!"</p>
        <div className="cards w-[75%] text-xl h-[70%] flex justify-center gap-5 font-semibold">
          <div className='w-[30%] h-[80%] '>
          <div className='w-[100%] h-[100%] '>
            <img src={card1} alt="" /> </div>
          <p>Shop New Mercurial</p>
          </div>
          <div className='w-[30%] h-[80%] '>
          <div className='w-[100%] h-[100%] '>
            <img src={card2} alt="" /> </div>
          <p>Explore Nike Soprt</p>
          </div>
          <div className='w-[30%] h-[80%] '>
          <div className='w-[100%] h-[100%] '>
            <img src={card3} alt="" /> </div>
          <p>Nike TIEMPO</p>
          </div>
      
        
        </div>
    </div>
  )
}

export default SecondPage