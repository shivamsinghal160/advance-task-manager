'use client';
import TaskProvider from './context/TaskContext';
import ThemeProvider from './context/ThemeContext';
import TaskForm from './components/TaskForm';
import ThemeToggle from './components/ThemeToggle';
import dynamic from 'next/dynamic';

const TaskList = dynamic(() => import('./components/TaskList'), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="container">
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Task Manager</h1>
            <ThemeToggle />
          </header>
          <TaskForm />
          <TaskList />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}