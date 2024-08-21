import React from 'react'
import vini from '../assets/vini2.png'

function Text() {
    return (
        <>
            <div className='ml-28 text-white textContainer mt-20 flex flex-col gap-8'>
                <div className="text-[48px] font-semibold leading-tight">
                    <div>Unleash Your Game - Nike</div>
                    <div>Football Essentials for</div>
                    <div>Every Champion</div>
                </div>


                <p className='font-semibold'>
                    "Score big with top Nike football gear. Shop essentials, from <br /> cleats to jerseys, and gear up for your game with the best in <br /> performance and style."
                </p>
                <button className='bg-black h-10 w-32 gap-1 rounded-[10px] font-semibold flex justify-center items-center'  style={{ boxShadow: '10px 15px 4px rgba(0, 0, 0, 0.5)' }}>
                    Get yours <span className="material-symbols-outlined">
                        arrow_circle_right
                    </span>
                </button>
            </div>

            <div className="vini absolute top-[28%] left-[45%]  h-[72vh] w-[45%]">
                <img className='w-full h-full object-cover' src={vini} alt="" />
            </div>
        </>
    )
}

export default Text
