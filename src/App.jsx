import { useState } from 'react';
import AddTask from './components/AddTask.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Minha Lista de Tasks</h1>
      <AddTask onAdd={addNewTask} />

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
