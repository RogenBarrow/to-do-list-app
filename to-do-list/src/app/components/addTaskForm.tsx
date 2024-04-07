'use client'
import React, { useState, ChangeEvent } from 'react';

function AddTaskForm() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [assignees, setAssignees] = useState<string[]>([]);
  const [todoList, setTodoList] = useState<{ task: string; date: string; assignee: string }[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleAssigneeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAssignee(event.target.value);
  };

  const handleAddAssignee = () => {
    if (assignee.trim() !== "") {
      if (!assignees.includes(assignee)) { // Check if assignee already exists
        setAssignees([...assignees, assignee]);
        setAssignee("");
      } else {
        alert("Assignee already exists!"); // You can replace this with your preferred way of displaying a message
      }
    }
  };
  

  const handleAddTask = () => {
    if (task.trim() !== "" && date.trim() !== "" && assignee.trim() !== "") {
      setTodoList([...todoList, { task, date, assignee }]);
      setTask("");
      setDate("");
      setAssignee("");
    }
  };

  const handleRemoveTask = (index: number) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <div className="flex justify-center items-top h-screen">
      <div className="w-full p-4">
        <div className="flex items-center mb-4">
          <input 
            className="block w-1/4 p-2 mr-2 text-black-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400"
            type="text"
            placeholder="Task..."
            value={task}
            onChange={handleInputChange}
          />
          <input 
            className="block w-1/4 p-2 mr-2 text-black-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <select
            className="block w-1/4 p-2 mr-2 text-black-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400"
            value={assignee}
            onChange={handleAssigneeChange}
          >
            <option value="">Select Assignee</option>
            {assignees.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
          <button type="button" onClick={handleAddTask} className="text-white bg-yellow-400 hover:bg-yellow-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2">Add Task</button>
        
          <div className="flex items-center mb-4">
          </div>
          
        </div>
        <div className="flex items-center mb-4">
        <input
            className="block w-1/4 p-2 mr-2 text-black-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400"
            type="text"
            placeholder="Add Assignee..."
            value={assignee}
            onChange={(event) => setAssignee(event.target.value)}
          />
          <button type="button" onClick={handleAddAssignee} className="text-white bg-yellow-400 hover:bg-yellow-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2">Add Assignee</button>
          </div>
        <div className="flex justify-center">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Task</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Assignee</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.task}</td>
                  <td className="border px-4 py-2">{item.date}</td>
                  <td className="border px-4 py-2">{item.assignee}</td>
                  <td className="border px-4 py-2">
                    <button 
                      type="button" 
                      onClick={() => handleRemoveTask(index)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
