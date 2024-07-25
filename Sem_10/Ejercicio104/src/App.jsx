/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from 'react';
import EmployeeProvider from './contexts/EmployeeContext';
import EmployeeList from './Components/EmployeeList';
import FormModal from './Components/FormModal';
import './App.css';

const App = () => {
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <EmployeeProvider>
      <div className="App">
        {isFormModalOpen && (
          <FormModal
            editingEmployee={editingEmployee}
            setEditingEmployee={setEditingEmployee}
            onClose={closeFormModal}
          />
        )}
        <EmployeeList setEditingEmployee={setEditingEmployee} />
      </div>
    </EmployeeProvider>
  );
};

export default App;
