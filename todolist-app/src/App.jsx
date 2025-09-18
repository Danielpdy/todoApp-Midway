
import './App.css';
import plusIcon from './assets/icons/plusIcon.png';
import titleIcon from './assets/icons/titleIcon.png';

function App() {

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
                <input className='inputBox' type="text" placeholder='What do you have to do for today?' />
              </div>

              <div>
                <select name="Type" id="" className='dropdowns'>
                  <option value="" disabled selected>Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <select name="Type" id="" className='dropdowns'>
                  <option value="" disabled selected>Type</option>
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="Health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className='addButtonContainer'>
                <button className='addButton'>+</button>
              </div>


            </div>

            <div className='tasksContainer'>
              <p>You don't have tasks added</p>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default App
