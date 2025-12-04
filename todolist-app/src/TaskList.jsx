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

export default function TaskList ({ tasks = [], onDelete, onStatusChange }) {


    return (
        <div className='tasksBox'>
            <div className='tasksHeader'>
                <div className='headerItem'>Created</div>
                <div className='headerItem'>Name</div>
                <div className='headerItem'>Type</div>
                <div className='headerItem'>Priority</div>
                <div className='headerItem'>Status</div>
                <div className='headerItem'></div>
            </div>

            {tasks.map((task) => (
                <div key={task.id} className='tasksBox2'>

                    <div className='taskContainers'>
                        <p className='taskName'>{task.createdAt}</p>
                    </div>
                    <div className='taskContainers'>
                        <p className='taskName'>{task.name}</p>
                    </div>

                    <div className='taskContainers'>
                        <div className='displayPriority'>
                            {task.type === "personal" ? <img className='priorityIcons' src={personalIcon} /> :
                            task.type === "work" ? <img className='priorityIcons' src={workIcon} /> :
                            task.type === "Health" ? <img className='priorityIcons' src={healthIcon} /> :
                            task.type === "entertainment" ? <img className='priorityIcons' src={entertainmentIcon} /> :
                            task.type === "other" ? <img className='priorityIcons' src={otherIcon} /> : null}
                            <p className='taskName'>{task.type}</p>
                        </div>
                    </div>

                    <div className='taskContainers'>
                        <div className='displayPriority'>
                            {task.priority === "low" ? <img className='priorityIcons' src={lowIcon} /> :
                            task.priority === "medium" ? <img className='priorityIcons' src={mediumIcon} /> :
                            task.priority === "high" ? <img className='priorityIcons' src={highIcon} /> : null}
                            <p className='taskName'>{task.priority}</p>
                        </div>
                    </div>

                    <div className='taskContainers'>
                        <select
                            className='statusDropdown'
                            value={task.status || "pending"}
                            onChange={(e) => onStatusChange(task.id, e.target.value)}
                        >
                            <option value="pending">⏳ Pending</option>
                            <option value="done">✅ Done</option>
                        </select>
                    </div>

                    <div className='taaskContainers'>
                        <button className='deleteButton' onClick={() => onDelete(task.id)}>
                            <img src={deleteIcon}/>
                        </button>
                    </div>


                </div>
            ))}
        </div>
    );
}