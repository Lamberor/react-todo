import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 100
            }
        ]);
        setInputText('');
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    return (
        <form>
            <input type="text" value={inputText} onChange={inputTextHandler} className="todo-input" />
            <button type="submit" onClick={submitTodoHandler} className="todo-button">
                <i class="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;