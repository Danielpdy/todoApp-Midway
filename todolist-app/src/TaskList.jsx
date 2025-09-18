import './App.css';
import { useState } from 'react';

export default function TaskList ({ tasks = [] }) {
    const [type, setType] = useState("");
    const [priority, setPriority] = useState("");

    

    return (
        <div className='tasksBox'>
            {tasks.map((task) => (
                <div className='tasksBox2'>
                    <div className='taskContainers'>
                        <div>
                            <label>Name</label>
                            <p>{task.Task}</p>
                        </div>    
                    </div>

                    <div className='taskContainers'>{task.Type}</div>
                    <div className='taskContainers'>{task.Priority}</div>
                </div>
            ))}
        </div>
    );
}