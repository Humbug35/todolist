import React from 'react';
import '../styles/ListItem.css';

function ListItem(props) {
    return(
        <li className="list-item-wrapper">
            <li>{props.task.task}</li>
            {
                props.task.done
                ? (
                    <span className="done-tasks-icons">
                        <i className="fa fa-times" aria-hidden="true" onClick={() => props.deleteTask(props.task.id, props.task.done)}></i>
                    </span>
                )
                : (
                    <span className="todo-tasks-icons">
                        <i className="fa fa-check" aria-hidden="true" onClick={() => props.moveTaskToDone(props.task.id)}></i>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => props.deleteTask(props.task.id, props.task.done)}></i>
                    </span>
                )
            }
        </li>
    )
}

export default ListItem;