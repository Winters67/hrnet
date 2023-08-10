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
    },
});

export const { addEmployee, clearEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;