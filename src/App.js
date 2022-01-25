
import './App.css';
import Header from './MyComponents/Header';
import  {Todos}  from './MyComponents/Todos';
import  {Footer}  from './MyComponents/Footer';


function App() {
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
    <Todos todos={todos}/>
    <Footer/>
       </>
  );
}

export default App;
