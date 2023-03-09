import logo from './logo.svg';
import './App.css';
import {User} from './User.js'
import { useState } from 'react';
import {Task} from './Task.js'

function App() {

  const [todolist,setTodolist]=useState([]);
  const [text,setText]=useState("");

  const textHandle=(event)=>{
    setText(event.target.value);
  }

  const addtask=()=>{
    const task={
      id: todolist.length===0 ? 1 : todolist[todolist.length -1].id+1 ,
      taskname: text,
      complete: false
    }
    setTodolist([...todolist,task]);
  }
  
  const deltext=(id)=>{
    setTodolist(todolist.filter((task) => task.id !== id));
  }

  const completed=(id)=>{
    setTodolist(todolist.map((task) => {
      if(task.id===id)
      {
        return {...task,completed:true};
      }
      else
      {
        return task;
      }
    }))
     
  }

  return (
    <div className="App">
    <div className='Task'>
      <input onChange={textHandle}/>
      <button onClick={addtask}>ADD</button>
    </div>
    <div className='List'>
     { todolist.map((el) => {
       return <Task taskname={el.taskname} status={el.completed} id={el.id} deltext={deltext} completed={completed}/>
      })
    }
    </div>
    
    </div>
  );
}


export default App;
