import Task from "./mainTask";


interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: TaskItem[]; // Ensure that tasks prop is defined as an array of TaskItem objects
  onDelete: (taskId: number) => void;
  onToggle: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggle={() => onToggle(task.id)}
        />
      ))}
   