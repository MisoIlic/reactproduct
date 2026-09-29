/* eslint-disable no-undef */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import TodoInputComponent from './components/TodoInputComponent';
import TodoListComponenet from './components/TodoListComponenet';
import { useEffect, useState } from 'react';




function App() {
  const[todoItems, setTodoItems] = useState([]);
  
  useEffect(() => {
    console.log(todoItems);
  }, [todoItems])
  

  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-[60px] text-green-600 font-extrabold my-[30px]'>TODO APP</h1>


        <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems}/>
        <TodoListComponenet todoItems={todoItems} setTodoItems={setTodoItems}/>
        <ToastContainer />
        

      
    </div>
  )

    
  
}
 
  


export default App
