import './App.css';
import Headers from "./myComponents/Header";
import Todos from "./myComponents/Todos"; 
import {AddTodos} from "./myComponents/AddTodos"; 
import React, { useState } from 'react'; 

function App() {
  
  const onDelete = (todo)=>{
    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
  }

  const addTodo = (title,desc) =>{
    alert('this line is adding for testing in git')
    const sno = (todos.length)+1;
    const myTodo = {
      sno : sno,
      title : title,
      Desc : desc
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : 'test',
      Desc : 'testing decsription'
    },
    {
      sno : 2,
      title : 'test2',
      Desc : 'testing2 decsription2'
    },
    {
      sno : 3,
      title : 'test3',
      Desc : 'testing3 decsription2'
    }
    
  ]);
  return (
    <>
      <Headers/>
      <AddTodos addTodo={addTodo}/>
      <div className="container">
      <Todos todos={todos} onDelete={onDelete}/>
      </div>
    </>
  );
}

export default App;
