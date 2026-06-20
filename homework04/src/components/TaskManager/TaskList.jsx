import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div>
      <h3>Список задач</h3>
      {tasks.length === 0 ? (
        <p>Задач немає. Створіть першу задачу вище!</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onUpdate={onUpdate} 
              onDelete={onDelete} 
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;