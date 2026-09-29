import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

function TodoInputComponent({todoItems, setTodoItems}) {

    const [currentTodo, setCurrentTodo] = useState('');
    function handleTodoInput(event){
         
        setCurrentTodo(event.target.value);
       
    }
    function handleTodo(){
        if(currentTodo){
        setTodoItems([...todoItems, {title: currentTodo, id: new Date().getTime()}]);
        setCurrentTodo('');
        toast.success('Zadatak je uspjesno dodan');
        }else{
            toast.warn('Unesite zadatak');
        }


    }
    
  
    return (
    <div className='flex justify-center items-center gap-[20px] w-[50%]'>
        
        <input type="text" placeholder='Unesite zadatak' className='outline-0 w-[100%] text-[10px] border-2 border-b-gray-400 px-[20px] py-[10px] rounded-lg'
        onChange={handleTodoInput}
        value={currentTodo} /> 

        <button onClick={handleTodo} className='bg-green-600 text-white font-bold px-[12px] py-[6px] rounded-lg cursor-pointer '>Dodaj</button>
    </div>
  )
}

export default TodoInputComponent