import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#646cff] transition-colors"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="px-6 py-3 bg-[#646cff] text-white border-none rounded-lg cursor-pointer font-bold hover:bg-[#535bf2] transition-colors">Add</button>
    </form>
  );
};

export default TodoForm;
