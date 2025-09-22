import './App.css';
import lowIcon from './assets/icons/lowIcon.png';
import mediumIcon from './assets/icons/mediumIcon.png';
import highIcon from './assets/icons/highIcon.png';
import personalIcon from './assets/icons/personalIcon.png';
import workIcon from './assets/icons/workIcon.png';
import healthIcon from './assets/icons/healthIcon.png';
import entertainmentIcon from './assets/icons/entertainmentIcon.png';
import otherIcon from './assets/icons/otherIcon.png';
import deleteIcon from './assets/icons/deleteIcon.png';

export default function TaskList ({ tasks = [], onDelete }) {


    return (
        <div className='tasksBox'>
            {tasks.map((task) => (
                <div className='tasksBox2'>


                    <div className='taskContainers'>
                        <div className='singleTaskBox'>
                            <label className='taskLabels'>Created</label>
                            <p className='taskName'>{task.CreatedDate}</p>
                        </div>
                    </div>
                    <div className='taskContainers'>
                        <div className='singleTaskBox'>
                            <label className='taskLabels'>Name</label>
                            <p className='taskName'>{task.Task}</p>
                        </div>    
                    </div>

                    <div className='taskContainers'>
                        <div className='singleTaskBox'>
                            <label className='taskLabels'>Type</label>
                            <div className='displayPriority'>
                                {task.Type === "personal" ? <img className='priorityIcons' src={personalIcon} /> : 
                                task.Type === "work" ? <img className='priorityIcons' src={workIcon} /> : 
                                task.Type === "Health" ? <img className='priorityIcons' src={healthIcon} /> : 
                                task.Type === "entertainment" ? <img className='priorityIcons' src={entertainmentIcon} /> : 
                                task.Type === "other" ? <img className='priorityIcons' src={otherIcon} /> : null}
                                <p className='taskName'>{task.Type}</p>
                            </div>    
                        </div>
                    </div>

                    <div className='taskContainers'>
                        <div className='singleTaskBox'>
                            <label className='taskLabels'>Priority</label>
                            <div className='displayPriority'>
                                {task.Priority === "low" ? <img className='priorityIcons' src={lowIcon} /> : 
                                task.Priority === "medium" ? <img className='priorityIcons' src={mediumIcon} /> :
                                task.Priority === "high" ? <img className='priorityIcons' src={highIcon} /> : null}
                                <p className='taskName'>{task.Priority}</p>
                            </div>    
                        </div>
                    </div>

                    

                    <div className='taaskContainers'>
                        <div className='singleTaskBox'>
                            <button className='deleteButton' onClick={() => onDelete(task.Id)}>
                                <img src={deleteIcon}/>
                            </button>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
}