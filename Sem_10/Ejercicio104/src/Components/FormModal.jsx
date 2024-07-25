/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'

const FormModal = ({ editingEmployee, setEditingEmployee, onClose, isAdding }) => {
  const { dispatch } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    id: null,
    name: '',
    address: '',
    city: '',
  });

  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    } else {
      setEmployee({ id: null, name: '', address: '', city: '' });
    }
  }, [editingEmployee]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (employee.id) {
      dispatch({ type: 'EDIT_EMPLOYEE', payload: employee });
    } else {
      dispatch({ type: 'ADD_EMPLOYEE', payload: employee });
    }
    setEmployee({ id: null, name: '', address: '', city: '' });
    setEditingEmployee(null);
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h3>{employee.id ? 'Editar Empleado' : 'Agregar Empleado'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={employee.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={employee.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={employee.city}
            onChange={handleChange}
            required
          />
          <div>
            <button type="submit">
              {isAdding ? 'Agregar Empleado' : 'Actualizar Empleado'}
            </button>
            <button type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;