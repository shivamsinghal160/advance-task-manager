'use client';
import { useContext, memo } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div className={`task-item ${task.done ? 'done' : ''}`}>
      <span>{task.text}</span>
      <div className="task-actions">
        <button onClick={() => toggleTask(task.id)} className="complete-btn">
          {task.done ? '↩️' : '✔'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">❌</button>
      </div>
    </div>
  );
}

export default memo(TaskItem);