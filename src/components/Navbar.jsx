import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';


function Navbar() {
    let navItem=["Home","About","Services"];
    const[open, setOpen]=useState(false);
        
    

  return (
    <nav className='relative flex justify-between items-center bg-emerald-500'>
       
       <h1 className='text-[48px] font-bold text-blue-700'>LOGO</h1>

        <ul className='hidden sm:flex items-center justify-center gap-[20px] text-blue-700 mr-[10px] '>
        {navItem.map((element,index)=>{
            return <li key={index}>{element}</li>
        })}
       </ul>

      <button onClick={()=>setOpen((prev)=>!prev)
      } className='sm:hidden'><IoMdMenu className='block sm:hidden w-[50px] h-[50px] text-blue-700' /></button>  

      {open && (
        <>
        <div className='fixed inset-0 z-1020 sm:hidden 'onClick={()=> setOpen(false)}>

        </div>
        <ul className='absolute top-full left-0 z-20 w-full sm:hidden flex items-center justify-center gap-[20px] bg-blue-700 text-emerald-500 font-bold py-4'>
        {navItem.map((element,index)=>{
            return <li key={index} onClick={()=>setOpen(false)}>{element}</li>
        })}
       </ul>
        </>
      )}
   </nav> 
  );
}


export default Navbar
