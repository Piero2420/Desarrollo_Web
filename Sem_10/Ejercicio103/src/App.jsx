/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import EmployeeProvider from './contexts/EmployeeContext';
import EmployeeList from './Components/EmployeeList';
import EmployeeForm from './Components/EmployeeForm';
import './App.css';

const App = () => {
    const [editingEmployee, setEditingEmployee] = useState(null);

    return (
        <EmployeeProvider>
            <div className="App">
                <div className="form-container">
                    <EmployeeForm
                        editingEmployee={editingEmployee}
                        setEditingEmployee={setEditingEmployee}
                    />
                </div>
                <div className="list-container">
                    <EmployeeList setEditingEmployee={setEditingEmployee} />
                </div>
            </div>
        </EmployeeProvider>
    );
};

export default App;
