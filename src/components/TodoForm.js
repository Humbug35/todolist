import React, { useState } from 'react';
import '../styles/TodoForm.css';

function TodoForm(props) {
    const [taskValue, setTaskValue] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.addTask(taskValue, e);
        setTaskValue('');
    };

    return(
        <div className="todo-form-wrapper">
            <form onSubmit={(e) => submitForm(e)}>
                <div className="form-input-label">
                    <label className="todo-form-label">Add task</label>
                    <input type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
                </div>
                <div className="form-button">
                    <button className="add-todo-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;