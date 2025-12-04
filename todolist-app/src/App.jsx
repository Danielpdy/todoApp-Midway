
import './App.css';
import plusIcon from './assets/icons/plusIcon.png';
import titleIcon from './assets/icons/titleIcon.png';
import DefaultDisplay from './DefaultDisplay';
import TaskList from './TaskList';
import { useEffect, useState } from 'react';
import { AddTask, GetTasks, DeleteTask, UpdateTaskStatus } from './service/TaskService';

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);
  
  const deleteTask = async (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));

    try {
      await DeleteTask(id);
    } catch (error) {
      console.error("Failed to delete task:", error);
      fetchTasks();
    }
  }

  const updateStatus = async (id, status) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, status} : t));

    try {
      await UpdateTaskStatus(id, status);
    } catch (error) {
      console.error("Failed to update status:", error);
      fetchTasks();
    }
  }

  const newTask = {
    Name: input,
    Type: type,
    Priority: priority,
    CreatedAt: new Date().toISOString().split('T')[0],
  };

  const addTasks = async () => {
    if (!newTask) return;

    const tempId = Date.now();
    setTasks(prev => [...prev, {...newTask, id: tempId}]);

    try{
      const data = await AddTask(newTask);
      setTasks(prev => prev.map(t => t.id === tempId ? data : t));
    } catch(error){
      setTasks(prev => prev.filter(t => t.id !== tempId));
      console.error("Failed to add task");
    }

    setInput("");
    setType("");
    setPriority("");
  };

  async function fetchTasks() {
    const data = await GetTasks();
    setTasks(data);
  }


  return (
    <>
      <section className='appContainer'>
        <div className='mainContainer'>
          <div className='contentContainer'>
            <div className='titlesContainer'>
              <h1 className='title'> <img className='titleIcon' src={titleIcon}/> My Todo List</h1>
              <p className='subTitle'>Stay organized with your tasks</p>
            </div>

            <div className='subContentContainer'>

              <div>
                <input className='inputBox' value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" placeholder='What do you have to do for today?' />
              </div>

              <div>
                <select name="Type" value={priority} className='dropdowns'
                onChange={(e) => setPriority(e.target.value)}>

                  <option value="" disabled>Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <select name="Type" value={type} className='dropdowns'
                onChange={(e) => setType(e.target.value)}>

                  <option value="" disabled>Type</option>
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="Health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className='addButtonContainer'>
                <button className='addButton' onClick={addTasks}>+</button>
              </div>

            </div>

            <div className='tasksScrollContainer'>
              {tasks.length === 0 ? (
                <DefaultDisplay />
              ) : (
                <TaskList tasks={tasks} onDelete={deleteTask} onStatusChange={updateStatus} />
              ) }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
