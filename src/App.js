import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';


function App() {

  return (

    <div className="App">
      <header className="App-header">
     <h2 style={{color:"red"}}>TODO APP</h2> 
      <AddTask/>
      <ListTask/>
       
      </header>
    </div>
  );
}

export default App;