import React, { useState } from 'react'
import { TfiMenu } from "react-icons/tfi";

function NavbarComponent() {
    let navItems = ['Home', 'About', 'Contact', 'Services'];
    const[toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
        
       

     }

  return (
    <nav className='container mx-auto flex justify-between items-center bg-mainGreen h-[120px] p-[10px] relative'>

        <h1 className='text-[40px] font-extrabold text-mainBlue'>LOGO</h1>

        <ul className='flex items-center gap-[20px] text-[18px] text-mainBlue hidden lg:flex'>
            {navItems.map((item, index) => {
                return(
                    <li key={index}>{item}</li>
                );
            })}
        </ul>

        <div className='flex lg:hidden'>
            <TfiMenu onClick={handleToggle }  size={40} color='#525EA7'/>

            {toggle && <div className='bg-mainBlue w-[200px]  absolute top-full p-4 right-0 z-40'>

                <ul className='flex flex-col items-center gap-[20px] text-[18px] text-mainOrange mt-[20px] cursor-pointer '>
            {navItems.map((item, index) => {
                return(
                    <li key={index}>{item}</li>
                );
            })}
        </ul>
                </div>}
        </div>
        
        

    </nav>
  )
}

export default NavbarComponent