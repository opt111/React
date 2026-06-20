import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [assigneeName, setAssigneeName] = useState('');
  const [assigneeLevel, setAssigneeLevel] = useState('junior');
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !assigneeName.trim()) {
      alert('Будь ласка, заповніть назву задачі та ім\'я виконавця');
      return;
    }

    const newTaskData = {
      title,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      assignee: {
        name: assigneeName,
        level: assigneeLevel
      },
      isDone
    };

    onAdd(newTaskData);

    setTitle('');
    setTags('');
    setAssigneeName('');
    setAssigneeLevel('junior');
    setIsDone(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
      <h3>Створити нову задачу</h3>

      <div style={{ marginBottom: '10px' }}>
        <label>Назва задачі: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Теги (через кому): </label>
        <input type="text" placeholder="vue, react" value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Виконавець: </label>
        <input type="text" value={assigneeName} onChange={(e) => setAssigneeName(e.target.value)} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Рівень: </label>
        <select value={assigneeLevel} onChange={(e) => setAssigneeLevel(e.target.value)}>
          <option value="junior">junior</option>
          <option value="middle">middle</option>
          <option value="senior">senior</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          <input type="checkbox" checked={isDone} onChange={(e) => setIsDone(e.target.checked)} />
          Виконано
        </label>
      </div>

      <button type="submit">Додати задачу</button>
    </form>
  );
};

export default TaskForm;