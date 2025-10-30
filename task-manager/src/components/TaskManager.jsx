
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = index => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Enter task"
        className="border p‑2 mr‑2"
      />
      <Button onClick={addTask}>Add Task</Button>
      <ul className="mt‑4 space‑y‑2">
        {tasks.map((task, i) => (
          <li key={i} className="flex items‑center justify‑between">
            <span className={task.completed ? 'line‑through' : ''}>
              {task.text}
            </span>
            <div className="space‑x‑2">
              <Button variant="secondary" onClick={() => toggleTask(i)}>
                Toggle
              </Button>
              <Button variant="danger" onClick={() => deleteTask(i)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
