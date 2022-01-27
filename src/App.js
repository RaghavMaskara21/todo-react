
import './App.css';
import Header from './MyComponents/Header';
import  {Todos}  from './MyComponents/Todos';
import  {Footer}  from './MyComponents/Footer';
import React, {useState} from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("Deleted todo",todo);
  }
  let todos= [
    {
      sno:1 ,
      title: "GO to market",
      description: "You need to go to the market"
    },
    {
      sno:2 ,
      title: "GO to school",
      description: "You need to go to the school"
    },
    {
      sno:3,
      title: "GO to college",
      description: "You need to go to the college"
    }
  ]
  return (
    <>
    <Header title="MyTodoList" searchbar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
       </>
  );
}

export default App;
