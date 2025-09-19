
import './App.css';
import plusIcon from './assets/icons/plusIcon.png';
import titleIcon from './assets/icons/titleIcon.png';
import DefaultDisplay from './DefaultDisplay';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");

  const addTasks = () => {

    if (!input.trim() || !input || !type || !priority) return;

    const newTask = {
      Id: crypto.randomUUID(),
      CreatedDate: new Date().toLocaleDateString(),
      Task: input,
      Type: type,
      Priority: priority
    }

    setTasks(prev => [...prev, newTask]);

    setInput("");
    setType("");
    setPriority("");
  };


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

            {tasks.length === 0 ? (
              <DefaultDisplay />
            ) : (
              <TaskList tasks={tasks} />
            ) }


          </div>
        </div>
      </section>
    </>
  )
}

export default App
