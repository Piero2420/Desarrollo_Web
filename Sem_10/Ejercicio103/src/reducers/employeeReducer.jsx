export const employeeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return[...state, action.payload];
        case 'UPDATE_EMPLOYEE':
            return state.map((employee) =>
                employee.id === action.payload.id ? action.payload : employee
            );
        case 'DELETE_EMPLOYEE':
            return state.filter((employee) => employee.id !== action.payload);
        case 'SET_EMPLOYEES':
            return action.payload;
        default:
            return state;
    }
}