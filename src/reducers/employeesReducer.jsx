import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial pour le reducer user
const initialState = {
    list: [],
    currentEmployee: null,
};

// Création du slice pour le reducer user
const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.list.push(action.payload);
        },
        clearEmployees: state => {
            state.list = [];
        },
        deleteEmployee: (state, action) => {
            // Supprimer l'employé avec l'ID spécifié
            state.list = state.list.filter(employee => employee.id !== action.payload);
        },
    },
});

export const { addEmployee, clearEmployees,deleteEmployee  } = employeesSlice.actions;
export default employeesSlice.reducer;