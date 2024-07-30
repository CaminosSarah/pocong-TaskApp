import React, { useState } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';

const Tasks = () => {
    const initialTasks = [
        { description: 'Complete project documentation', assignee: 'Sarah Caminos', deadline: '2024-08-30', status: 'Pending' },
        { description: 'Design new feature', assignee: 'Pocong Raylen Joy', deadline: '2024-08-25', status: 'Completed' },
        { description: 'Fix bugs in application', assignee: 'Bacacao Welin', deadline: '2024-09-05', status: 'Pending' },
        { description: 'Prepare for client meeting', assignee: 'Mike Bustamante', deadline: '2024-08-28', status: 'Completed' },
        { description: 'Update software documentation', assignee: 'Rexy Brown', deadline: '2024-08-22', status: 'Pending' },
        { description: 'Conduct code review', assignee: 'Sarah Caminos', deadline: '2024-09-01', status: 'Completed' },
        { description: 'Test new features', assignee: 'John Doe', deadline: '2024-08-31', status: 'Pending' },
        { description: 'Deploy latest release', assignee: 'Jane Smith', deadline: '2024-08-29', status: 'Completed' },
        { description: 'Write unit tests', assignee: 'Mike Johnson', deadline: '2024-09-07', status: 'Pending' },
        { description: 'Fix UI issues', assignee: 'Lisa Brown', deadline: '2024-09-03', status: 'Pending' }
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState(initialTasks);

    const toggleStatus = (index) => {
        const newTasks = [...tasks];
        newTasks[index].status = newTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
        setTasks(newTasks);
        setFilteredTasks(newTasks);
    };

    return (
        <div>
            <h2>📒 List of Tasks 📒</h2>
            <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
            <ul>
                {filteredTasks.map((task, index) => (
                    <Task key={index} task={task} index={index} toggleStatus={toggleStatus} />
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
