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
            <li>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;