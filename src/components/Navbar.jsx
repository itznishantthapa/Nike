import React from 'react'
import logo from '../assets/logo2.png';
// import logo from '../assets/nike_logo.png';
const listItemHoverStyle = 'hover:bg-black h-12 w-28 flex justify-center items-center rounded-md hover:text-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg';
function Navbar() {
    return (
        <>

            <div className="navbar flex justify-between items-center font-inter h-[15vh] font-michroma px-4  select-none text-white ">
                <div className="logo h-[66px] w-[111px] ml-28">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-elements flex justify-between items-center list-none w-[50vh] text-sm">
                    <li className={listItemHoverStyle}>HOME</li>
                    <li className={listItemHoverStyle}>SHOP</li>
                    <li className={listItemHoverStyle}>CONTACT</li>
                    <li className={listItemHoverStyle}>FEATURES</li>
                </div>
                <div className="flex justify-center items-center gap-7 mr-28">
                    <span className="material-symbols-outlined">
                        shopping_bag
                    </span>
                    <button className='bg-black  h-10 w-24 rounded-[15px]  font-semibold'>Login</button>
                </div>
            </div>

        </>
    )
}

export default Navbar