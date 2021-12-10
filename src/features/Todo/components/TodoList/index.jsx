import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoList: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoList: null,
};

function TodoList({ todoList, onTodoClick }) {
    const handeTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, idx) => (
                <li 
                    key={todo.id} 
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed' 
                    })}
                    onClick={() => handeTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;