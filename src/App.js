import React, { useState } from 'react';
import './styles/App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { uuid } from 'uuidv4';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = (task, e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    const newTask = {
      id: uuid(),
      task,
      done: false,
    };
    return setTasks([newTask, ...tasks]);
  }

  const deleteTask = (id, done) => {
    if (done) {
      const existingDoneTasks = doneTasks.filter(task => task.id !== id);
      setDoneTasks(existingDoneTasks);
      
    } else {
      const existingTodoTasks  = tasks.filter(task => task.id !== id);
      setTasks(existingTodoTasks);
    }
  }

  const moveTaskToDone = id => {
    const task = tasks.find(task => task.id === id);
    const existingTodoTasks = tasks.filter(task => task.id !== id);
    task.done = true;

    setTasks(existingTodoTasks);
    setDoneTasks([task, ...doneTasks]);
}

  const clearList = list => {
    if (list === 'todo') {
      const makeDoneTasks = tasks.map(task => {
        task.done = true;
        return task;
      });
      setDoneTasks([...makeDoneTasks, ...doneTasks]);
      setTasks([]);
    } else {
      setDoneTasks([]);
    }
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} doneTasks={doneTasks} deleteTask={deleteTask} moveTaskToDone={moveTaskToDone} clearList={clearList} />
    </div>
  );
}

export default App;
