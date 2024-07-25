/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const EmployeeCard = ({ employee, onClose }) => {
    if (!employee) return null;

    return (
        <div className="employee-card-overlay">
            <div className="employee-card">
                <h3>Detalles de Empleado</h3>
                <p><strong>ID:</strong> {employee.id}</p>
                <p><strong>Nombre:</strong> {employee.name}</p>
                <p><strong>Dirección:</strong> {employee.address}</p>
                <p><strong>Ciudad:</strong> {employee.city}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EmployeeCard;