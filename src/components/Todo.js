import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((ele) => 
            ele.id !== todo.id
        ));
    };

    const completeHandler = () => {
        setTodos(todos.map((ele) => {
            if (ele.id === todo.id) {
                return {
                    ...ele,
                    completed: !ele.completed
                };
            }
            return ele;
        }));
    };

    return (
        <div className="todo">
            {todo.completed ? <li className="completed">{text}</li> : <li>{text}</li>}
            <button className="complete-btn" onClick={completeHandler}>
                {todo.completed ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i>}
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;