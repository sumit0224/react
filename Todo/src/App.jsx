import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './index.css'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // Load todos on mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
          setLoading(false);
          return;
        }
        // Only fetch if no stored todos
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        setTodos(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch initial todos. Please try adding one manually.');
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);
  // Sync with localStorage
  useEffect(() => {
    if (!loading) { // Avoid saving empty array on initial render before fetch
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, loading]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      userId: 1
    };
    setTodos([newTodo, ...todos]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  return (
    <div className="w-full max-w-[500px] mt-10">
      <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <h1 className="text-center mb-6 text-3xl font-bold text-[#646cff]">Todo App</h1>
        <TodoForm addTodo={addTodo} />
        {loading && <p className="text-center p-4 text-gray-500">Loading...</p>}
        {error && <p className="text-center p-4 text-[#ff4444]">{error}</p>}
        {!loading && !error && (
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  )
}

export default App
