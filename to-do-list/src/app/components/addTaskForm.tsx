'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface AddTaskFormProps {
  onAdd: (task: string) => void;
}

function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task..."
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
