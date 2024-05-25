
import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {

function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
<div>
<div className={task.completed?'todo-item-done':'todo-item-not-done'}>
 <h3>{task.completed?' done ':' to do '}</h3> 
<p>{task.text}</p>

 <input  type="checkbox"  checked={task.completed} onChange={handleChange}></input>
 <h3>{task.completed?' marked as done  ':' need to do  '}</h3> 
<button onClick={() => deleteTask(task.id)}> delete </button>
 </div>
 </div>
 );
}
export default TodoItem;
