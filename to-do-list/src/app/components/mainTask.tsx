

interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  task: TaskItem;
  onDelete: () => void;
  onToggle: () => void;
}



const Task: React.FC<TaskListProps> = ({ task, onDelete, onToggle }) => {
    return (
      <li>
      <label>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      </label>
      <button onClick={onDelete}>Delete</button>
    </li>
    );
  };
  
  export default Task;
  