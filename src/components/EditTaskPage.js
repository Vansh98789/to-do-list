import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTodo } from '../store/todoSlice';

export const EditTaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector(state => 
    state.todos.items.find(t => t.id === parseInt(id))
  );

  if (!todo) {
    return <div>Task not found</div>;
  }

  const handleStatusToggle = () => {
    dispatch(updateTodo({
      id: todo.id,
      updates: { completed: !todo.completed }
    }))
      .then(() => navigate('/'));
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Edit Task</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl mb-4">{todo.title}</h2>
        <p className="text-gray-600 mb-4">{todo.description}</p>
        <div className="space-y-4">
          <div>
            <span className="block mb-2">Current Status:</span>
            <span className={`px-2 py-1 rounded ${
              todo.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleStatusToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Modify Status
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};