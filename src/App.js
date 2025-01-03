
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { HomePage } from './components/HomePage';
import { AddTaskPage } from './components/AddTaskPage';
import { EditTaskPage } from './components/EditTaskPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;