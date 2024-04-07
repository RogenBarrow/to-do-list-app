import AddTaskForm from '@/app/components/addTaskForm'
import Task from '@/app/components/mainTask'
import TaskList from '@/app/components/taskList'
import React from 'react';

export default function Home() {
 

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm onAdd={AddTaskForm} />
      
    </div>
  );
};
