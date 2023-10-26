import React from 'react'

const Todolist = ({todos,setTodos,setEditTodo}) => {
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item,completed: !item.completed}
                }
                return item;
            })
        )
    }
    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
    }
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };
    const moveItemUp = (index) => {
        if (index > 0) {
          const updatedTodos = [...todos];
          const temp = updatedTodos[index];
          updatedTodos[index] = updatedTodos[index - 1];
          updatedTodos[index - 1] = temp;
          setTodos(updatedTodos);
        }
      };
    
      const moveItemDown = (index) => {
        if (index < todos.length - 1) {
          const updatedTodos = [...todos];
          const temp = updatedTodos[index];
          updatedTodos[index] = updatedTodos[index + 1];
          updatedTodos[index + 1] = temp;
          setTodos(updatedTodos);
        }
    }
  return (
    <div>
      {todos.map((todo,index)=>(
        <li className="list-item" key={todo.id}>
            <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete":""}`} 
            onChange={(event)=>event.preventDefault()}
            />
            <div>
            <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
            <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
            <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
            <i className="fa fa-trash"></i>
            </button>
            <button class="button-up task-button" onClick={()=>moveItemUp(index)}>↑</button>
            <button class="button-down task-button" onClick={()=>moveItemDown(index)}>↓</button>


        </div>    
        </li>
      ))}
    
    </div>
  )
}

export default Todolist;
