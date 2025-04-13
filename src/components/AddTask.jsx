import { useState } from 'react';

function AddTask({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== '') {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite sua task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTask;
