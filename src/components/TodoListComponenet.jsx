/* eslint-disable no-unreachable */
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function TodoListComponenet({todoItems, setTodoItems}) {

function removeTodo(id) {
  
  let removeTodo = todoItems.filter((todo) => todo.id !==id)
  setTodoItems(removeTodo);
  
}

  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-[20px] mt-[30px]'>
      {todoItems.length > 0 ?todoItems.map((todo)=>{
        return <div key={todo.id} className='text-[24px] font-bold bg-slate-400 w-[50%] rounded-lg p-[10px] flex justify-between items-center'>
            <h2>{todo.title}</h2>
            <FaTrashAlt size={32} color='red' onClick={() => removeTodo(todo.id)}  />
               </div>
        
        
      }): <h2 className='text-[24px] font-bold bg-green-400 w-[50%] rounded-lg p-[10px]'>Nemas zadataka za danas</h2>}
    
    </div>

  )
}

export default TodoListComponenet