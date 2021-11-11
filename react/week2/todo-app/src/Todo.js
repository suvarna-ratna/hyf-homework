import React, {useState} from 'react';
import todoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(todoList)
  const [check,setCheck] = useState(false)
  const newTodo = {id: todos.length+1, title:'random text'}
  const handleClick = () =>{
    setTodos(todos.concat(newTodo));
  }
  const handleDelete = (id) =>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }
  return (
    <div>
       <button onClick={handleClick}>Add Todo</button>
      {todos.map((todo)=><><li key={todo.id} style={{textDecorationLine: check ? 'line-through' : 'none'}}><input type="checkbox" onClick={() => setCheck(!check)}/>{todo.title}<button onClick={()=>handleDelete(todo.id)}>Delete</button></li></>)}
    </div>
  );
}

export default Todo;


