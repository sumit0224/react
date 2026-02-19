import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div className={`flex justify-between items-center p-3 bg-[#f9f9f9] rounded-lg border border-gray-100 transition-transform hover:-translate-y-px ${todo.completed ? 'completed' : ''}`}>
            <div className="flex items-center gap-4 cursor-pointer flex-1" onClick={() => toggleComplete(todo.id)}>
                <span className={`w-6 h-6 border-2 rounded-full flex items-center justify-center text-sm transition-all ${todo.completed ? 'bg-[#4caf50] border-[#4caf50] text-white' : 'border-[#ccc]'
                    }`}>
                    {todo.completed ? '✓' : '○'}
                </span>
                <p className={`m-0 text-base ${todo.completed ? 'line-through text-[#999]' : ''}`}>{todo.title}</p>
            </div>
            <button
                className="bg-transparent border-none text-[#ff4444] text-2xl cursor-pointer px-2 leading-none opacity-60 hover:opacity-100 transition-opacity"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                }}
                aria-label="Delete todo"
            >
                ×
            </button>
        </div>
    );
};

export default TodoItem;
