'use client';
import { useContext, useMemo, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    return filter === 'completed' ? tasks.filter(t => t.done)
      : filter === 'pending' ? tasks.filter(t => !t.done)
        : tasks;
  }, [tasks, filter]);

  return (
    <>
      <div className="task-filters">
        {['all', 'completed', 'pending'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'active' : ''}>{f}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="no-records">No records found</p>
      ) : (
        <DragDropContext onDragEnd={() => { }}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {filtered.map((task, i) => (
                  <Draggable draggableId={String(task.id)} index={i} key={task.id}>
                    {(prov) => (
                      <div ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps}>
                        <TaskItem task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>)}
    </>
  );
}