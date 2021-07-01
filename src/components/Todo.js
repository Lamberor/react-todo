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
            <button onClick={completeHandler}>
                {
                    todo.completed ? 'Not Done' : 'Done'
                }
            </button>
            <button onClick={deleteHandler}>GIVE UP</button>
        </div>
    );
};

export default Todo;