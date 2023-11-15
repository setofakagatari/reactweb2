import './css/index.css';
import TaskList from './TaskList.jsx';
import { tasks as data } from "./tasks.js";
import TaskForm from './TaskForm.jsx';
import React, { useState, useEffect } from "react";
import { Header, Eventos, Footer } from './Componentes';



function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(taskTitle,taskTopic) {
    setTasks([...tasks, {
      title: taskTitle,
      id:tasks.length ,
      description:"Imagen no disponible",
      topic: taskTopic,
    }])
  }
  return (<div className='contenedor'>
    <Header/>
<TaskForm createTask={createTask}/>
    <div className='contenido'>
    <TaskList tasks={tasks} />
    </div>
    <Eventos/>
<Footer/>
  </div>);
}
export default App
