import React ,{useState} from 'react';
import Todolist from './Todolist'
import './App.css';
const App=()=>{
  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);

  const itemevent=(event)=>{
    var str=event.target.value;
    if(str.trim()==""){
      alert("write some note");}
    else
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1><br></br> <input type="text" placeholder="Add a Item" onChange={itemevent} value={inputList}/>  
        <button  onClick={listOfItems}>+</button><hr/>
        <ul>
        {Items.map((itemval) => {
          return <Todolist text={itemval}/>; 
        }
        )}
        </ul>
      </div>
    </div>

    </>

  );
}
export default App;