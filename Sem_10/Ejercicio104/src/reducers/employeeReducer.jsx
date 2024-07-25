/* eslint-disable no-case-declarations */
export const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      const newEmployee = {
        ...action.payload,
        id: Date.now(),
      };
      return [...state, newEmployee];
    case 'DELETE_EMPLOYEE':
      return state.filter(employee => employee.id !== action.payload);
    case 'EDIT_EMPLOYEE':
      return state.map(employee =>
        employee.id === action.payload.id ? action.payload : employee
      );
    default:
      return state;
  }
}