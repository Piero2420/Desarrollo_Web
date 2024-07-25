/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

const EmployeeList = ({ setEditingEmployee }) => {
  const { employees, dispatch } = useContext(EmployeeContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.address} - {employee.city}
            <div className="button-group">
              <button onClick={() => setEditingEmployee(employee)}>Edit</button>
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
