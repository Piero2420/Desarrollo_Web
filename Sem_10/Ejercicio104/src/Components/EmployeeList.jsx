/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import EmployeeCard from './EmployeeCard';
import FormModal from './FormModal';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const EmployeeList = () => {
  const { employees, dispatch } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const employeesPerPage = 8;

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(employee =>
        employee.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [search, employees]);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  const handleAddEmployee = () => {
    setEditingEmployee({ id: null, name: '', address: '', city: '' });
    setIsAdding(true);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsAdding(false);
  };

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '100%' }}>
      <h2>Lista de Empleados</h2>
      <div className="add-employee-btn">
        <input
          type="text"
          placeholder="Buscar por Nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button onClick={handleAddEmployee}>
        {isAdding ? 'Añadir Empleado' : 'Añadir Empleado'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.city}</td>
              <td className="table-buttons">
                <button onClick={() => handleEditEmployee(employee)}>
                  <FaEdit style={{ marginRight: '5px' }} /> Editar
                </button>
                <button onClick={() => handleDelete(employee.id)}>
                  <FaTrashAlt style={{ marginRight: '5px' }} /> Borrar
                </button>
                <button onClick={() => setSelectedEmployee(employee)}>
                  <FaEye style={{ marginRight: '5px' }} /> Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <EmployeeCard
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
      <div className="pagination">
        {[...Array(Math.ceil(filteredEmployees.length / employeesPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>

      {editingEmployee !== null && (
        <FormModal
          editingEmployee={editingEmployee}
          setEditingEmployee={setEditingEmployee}
          onClose={() => {
            setEditingEmployee(null);
            setIsAdding(false);
          }}
          isAdding={isAdding}
        />
      )}
    </div>
  );
};

export default EmployeeList;