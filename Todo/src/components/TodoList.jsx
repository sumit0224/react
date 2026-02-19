import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    if (todos.length === 0) {
        return (
            <div className="text-center p-4 text-gray-500">
                <p>No Todos Found</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
