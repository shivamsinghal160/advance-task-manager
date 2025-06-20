'use client';
import { createContext, useMemo, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useIsMounted from '../hooks/useIsMounted';

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const isMounted = useIsMounted();
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = useCallback(
    (text) => setTasks((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }]),
    []
  );

  const toggleTask = useCallback(
    (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))),
    []
  );

  const deleteTask = useCallback((id) => setTasks((prev) => prev.filter((t) => t.id !== id)), []);

  const value = useMemo(() => ({ tasks, addTask, toggleTask, deleteTask }), [tasks]);

  if (!isMounted) return null;

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}