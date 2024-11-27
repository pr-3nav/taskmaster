import { useState } from "react";
function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([
          ...tasks, 
          { 
            id: Date.now(), 
            text: newTask, 
            completed: false 
          }
        ]);
        setNewTask('');
      }
    };
  
    const toggleTask = (id) => {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  
    return (
      <div className="container mx-auto my-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="flex mb-4">
            <input 
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
              className="flex-grow p-2 border rounded-l-md"
            />
            <button 
              onClick={addTask}
              className="bg-blue-900 text-white px-4 py-2 rounded-r-md hover:bg-blue-800"
            >
              Add Task
            </button>
          </div>
  
          <ul>
            {tasks.map(task => (
              <li 
                key={task.id} 
                className="flex items-center justify-between p-3 border-b"
              >
                <div className="flex items-center">
                  <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="mr-3"
                  />
                  <span 
                    className={`${task.completed ? 'line-through text-gray-400' : ''}`}
                  >
                    {task.text}
                  </span>
                </div>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default TaskManager;