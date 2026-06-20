import React, { useState, use } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../../services/tasks';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const tasksPromise = fetchTasks();

const TaskBoard = () => {
  const initialTasks = use(tasksPromise);

  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Помилка при додаванні:", error);
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    try {
      const updated = await updateTask(id, updatedData);
      setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    } catch (error) {
      console.error("Помилка при оновленні:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Помилка при видаленні:", error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Керування задачами</h1>

      <TaskForm onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default TaskBoard;