import React from 'react';

const Task = ({ task, index, toggleStatus }) => {
    return (
        <li>
            <div><strong>Task {index + 1}</strong></div>
            <div><span><strong>Description: </strong>{task.description}</span></div>
            <div><span><strong>Assignee: </strong>{task.assignee}</span></div>
            <div><span><strong>Deadline: </strong>{task.status === 'Pending' ? task.deadline : 'N/A'}</span></div>
            <div><span><strong>Status: </strong>{task.status}</span></div>
            <button onClick={() => toggleStatus(index)}>Toggle Status</button>
        </li>
    );
};

export default Task;
