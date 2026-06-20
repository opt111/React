import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(task.title);
  const [editTags, setEditTags] = useState(Array.isArray(task.tags) ? task.tags.join(', ') : task.tags);
  const [editName, setEditName] = useState(task.assignee?.name || '');
  const [editLevel, setEditLevel] = useState(task.assignee?.level || 'junior');
  const [editIsDone, setEditIsDone] = useState(task.isDone);

  const handleSave = () => {
    const updatedData = {
      title: editTitle,
      tags: editTags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      assignee: {
        name: editName,
        level: editLevel
      },
      isDone: editIsDone
    };

    onUpdate(task.id, updatedData);
    setIsEditing(false);
  };

  return (
    <li style={{ 
      border: '1px solid #eee', 
      padding: '10px', 
      marginBottom: '10px', 
      borderRadius: '4px',
      backgroundColor: editIsDone ? '#f0fdf4' : '#fff' 
    }}>
      {isEditing ? (
        <div>
          <div style={{ marginBottom: '5px' }}>
            <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          </div>
          <div style={{ marginBottom: '5px' }}>
            <input type="text" value={editTags} onChange={(e) => setEditTags(e.target.value)} />
          </div>
          <div style={{ marginBottom: '5px' }}>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
            <select value={editLevel} onChange={(e) => setEditLevel(e.target.value)}>
              <option value="junior">junior</option>
              <option value="middle">middle</option>
              <option value="senior">senior</option>
            </select>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <label>
              <input type="checkbox" checked={editIsDone} onChange={(e) => setEditIsDone(e.target.checked)} />
              Виконано
            </label>
          </div>
          <button onClick={handleSave} style={{ marginRight: '5px' }}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
              {task.title}
            </strong>
            <div style={{ fontSize: '12px', color: '#666' }}>
              Теги: {Array.isArray(task.tags) ? task.tags.join(', ') : task.tags}
            </div>
            <div style={{ fontSize: '12px', color: '#444' }}>
              Виконавець: {task.assignee?.name} ({task.assignee?.level})
            </div>
          </div>
          <div>
            <button onClick={() => setIsEditing(true)} style={{ marginRight: '5px' }}>Edit</button>
            <button onClick={() => onDelete(task.id)} style={{ backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5' }}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;