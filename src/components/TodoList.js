import React from 'react';
import ListItem from './ListItem';
import '../styles/TodoList.css';

function TodoList(props) {
    return (
        <div className="todo-list">
            {
                props.tasks.length > 0 || props.doneTasks.length > 0
                ? (
                    <div className="todo-list-wrapper">
                        <div className="tasks-todo">
                            <div className="todo-list-header">
                                <h3>Task todo</h3>
                                <div className="todo-tasks-move">
                                    <button onClick={() => props.clearList('todo')}>Move all to done</button>
                                </div>
                            </div>
                            <div className="tasks">
                                {
                                    props.tasks.length > 0
                                    ? props.tasks.map(task => {
                                        return <ListItem task={task} moveTaskToDone={props.moveTaskToDone} deleteTask={props.deleteTask} key={task.id} />
                                    })
                                    : (
                                        <div className="no-tasks-todo">
                                            <p>You have no tasks to do</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="tasks-done">
                        <div className="todo-list-header">
                                <h3>Task done</h3>
                                <div className="todo-tasks-move">
                                    <button onClick={() => props.clearList('done')}>Clear list</button>
                                </div>
                            </div>
                            <div className="tasks">
                            {
                                    props.doneTasks.length > 0
                                    ? props.doneTasks.map(task => {
                                        return <ListItem task={task} deleteTask={props.deleteTask} key={task.id} />
                                    })
                                    : (
                                        <div className="no-done-tasks">
                                            <p>You have no done tasks</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="no-tasks">
                        <p>You have no tasks, please add some in the form!</p>
                    </div>
                )               
            }
        </div>
    )
}

export default TodoList;