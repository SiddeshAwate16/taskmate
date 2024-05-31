import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  },[taskList]);
  
  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
