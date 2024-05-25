
import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList() {
  const [tasks, setTasks] = useState([
  {
  id: 1,
  text: 'Knew IT Lesson',
  completed: true
  },
  {
  id: 2,
  text: 'Meeting with Friends',
  completed: false
  }
  ]);
  
  const [text, setText] = useState('');

 function addTask(text) {
          const newTask = {
          id: Date.now(),
          text,
          completed: false
          };
  setTasks([...tasks, newTask]);
  setText('');
  }

 function deleteTask(id) {
  setTasks(tasks.filter(task => task.id !== id));
  }

 function toggleCompleted(id) {
  setTasks(tasks.map(task => {
  if (task.id === id) {
  return { ...task, completed: !task.completed};
  } else {
  return task;
  } 
  }));
  }

 return (
 <div>
  
  {tasks.map(task => (
  <TodoItem key={task.id} task={task}
  deleteTask={deleteTask}
  toggleCompleted={toggleCompleted} 
  />
  ))}
    <div className="todo-item-list">
  
 <input value={text} width={400} onChange={e => setText(e.target.value)}  />
 <button onClick={() => addTask(text)}>Add new Task </button>
 </div>

  </div>
  
  );
 }
 export default TodoList;
 