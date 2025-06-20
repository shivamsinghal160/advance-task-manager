'use client';
import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTask(trimmed);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add New Task" />
      <button>Add</button>
    </form>
  );
}