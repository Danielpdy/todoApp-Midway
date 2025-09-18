import './App.css';
import defaultDisplay from './assets/icons/defaultDisplay.png';


export default function defaultdisplay () {
    return (
        <div className='tasksContainer'>
              
              <div className='defaultDisplayContainer'>
                <img className='defaultDisplayIcon' src={defaultDisplay}/>
                <p className='defaultDisplay'> You don't have tasks added</p>
              </div>

              <p className='defaultDisplayText'>Get started with your daily activities</p>

        </div>
    );
}