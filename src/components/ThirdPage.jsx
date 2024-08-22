import React from 'react'
import cardgroup1 from '../assets/cardgroup1.png'
import cardgroup2 from '../assets/cardgroup2.png'
import cardgroup3 from '../assets/cardgroup3.png'
import cardgroup4 from '../assets/cardgroup4.png'
import cardgroup5 from '../assets/cardgroup5.png'
import cardgroup6 from '../assets/cardgroup6.png'
import cardgroup7 from '../assets/cardgroup7.png'
import cardgroup8 from '../assets/cardgroup8.png'


function ThirdPage() {
    return (
        <div className="container flex justify-center">
            <div className='h-screen flex flex-col items-start justify-evenly'>
                <p className='text-4xl font-semibold '>Shop by Sport</p>
                <div className="w-[80vw] h-[85vh]  flex flex-wrap justify-between gap-4">
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup1})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Running</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup2})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Football</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup3})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>BasketBall</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup4})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Gym</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup5})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Tennis</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup6})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Yoga</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup7})` }}>
                        <button className='w-44 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Skateboarding</button>
                    </div>
                    <div className='w-[23%]  h-[48%] bg-cover bg-center flex items-end ' style={{ backgroundImage: `url(${cardgroup8})` }}>
                        <button className='w-32 h-12 bg-white text-black rounded-2xl text-2xl font-semibold ml-2 mb-2'>Dance</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ThirdPage