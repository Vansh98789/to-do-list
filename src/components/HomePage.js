import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../store/todoSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { items: todos, status, error } = useSelector(state => state.todos);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Link 
          to="/add" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Task
        </Link>
      </div>
      
      <div className="grid gap-4">
        {todos.map(todo => (
          <div 
            key={todo.id} 
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-2">{todo.title}</h2>
            <p className="text-gray-600 mb-2">{todo.description}</p>
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded ${
                todo.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {todo.completed ? 'Completed' : 'Pending'}
              </span>
              <Link 
                to={`/edit/${todo.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};