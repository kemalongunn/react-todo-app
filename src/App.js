import { useState } from "react";
import { Button, FormControl, FormCheck } from "react-bootstrap";
import {ReactComponent as DeleteIcon} from "./assets/delete.svg"
import {ReactComponent as EdıtIcon} from "./assets/edıt.svg";
import {ReactComponent as SaveIcon} from "./assets/save.svg";

 function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleClick = () => {
    setTodolist(prevTodolist => [...prevTodolist, newTodo])
    setNewTodo("");
  }


  // inputun içine girilen her değişikliği consala basar. didMount(). 
  // useEffect(() => {
  //   console.log(newTodo)
  // },[newTodo]);

  const taskInput = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>

      <div className="d-flex w-75 justify-content-space mt-3">
        <FormControl
          className="w-75"
          placeholder="Writa a todo"
          value={newTodo}
          onChange={taskInput}
        />
        <Button onClick={handleClick} className="ms-5">
          Add todo
        </Button>
      </div>
      <div className="mt-5 w-75">
        {
          todolist.map((ıtem, i)=> (
            
            <div key={i} className="d-flex justify-content-between">
              <div className="d-flex">
                <FormCheck
                type="checkbox"
                className="me-2"
                />
                <label>
                  { ıtem }
                </label>
              </div>
              <div>
                <DeleteIcon width={25} height={25} style={{cursor: 'pointer'}} className="me-2" />
                <EdıtIcon width={25} height={25}  style={{cursor: 'pointer'}} className="me-2" />
                <SaveIcon width={25} height={25}  style={{cursor: 'pointer'}} />
              </div>
            </div>
             
          ))
        }
      </div>
    </div>
  );
}

export default App;
