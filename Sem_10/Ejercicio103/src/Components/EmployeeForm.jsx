/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'

const EmployeeForm = ({ editingEmployee, setEditingEmployee }) => {
    const { dispatch } = useContext(EmployeeContext)
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        address: '',
        city: '',
    })

    useEffect(() => {
        if (editingEmployee) {
            setEmployee(editingEmployee)
        } else {
            setEmployee({ id: '', name: '', address: '', city: '' })
        }
    }, [editingEmployee])

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmployee({ ...employee, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (employee.id) {
            dispatch({ type: 'UPDATE_EMPLOYEE', payload: employee })
        } else {
            dispatch({
                type: 'ADD_EMPLOYEE',
                payload: { ...employee, ide: Date.now().toString },
            })
        }
        setEmployee({ id: '', name: '', address: '', city: '' })
        setEditingEmployee(null)
    }

    return (
        <div>
            <h2>{editingEmployee ? 'Edit Employe' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={employee.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={employee.city}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{editingEmployee ? 'Update' : 'Add'}</button>
            </form>
        </div>
    )
}

export default EmployeeForm