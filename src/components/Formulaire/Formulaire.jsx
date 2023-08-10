import React, { useReducer } from 'react';
import { addEmployee } from '../../reducers/employeesReducer';
import { useDispatch } from 'react-redux';


const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: 'AL',
    zipCode: '',
    department: 'Sales',
};


const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};

function EmployeeForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const reduxDispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            value: value,
        });
    };

    const saveEmployee = () => {
        console.log(state);
        reduxDispatch(addEmployee(state));
    };

    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form id="create-employee" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" value={state.firstName} onChange={handleChange} />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" value={state.lastName} onChange={handleChange} />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="text" name="dateOfBirth" value={state.dateOfBirth} onChange={handleChange} />

                <label htmlFor="startDate">Start Date</label>
                <input type="text" name="startDate" value={state.startDate} onChange={handleChange} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input type="text" name="street" value={state.street} onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" value={state.city} onChange={handleChange} />

                    <label htmlFor="state">State</label>
                    <input type="text" name="state" value={state.state} onChange={handleChange} />

                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" name="zipCode" value={state.zipCode} onChange={handleChange} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" value={state.department} onChange={handleChange}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="button" onClick={saveEmployee}>Save</button>
            </form>
        </div>
    );
}

export default EmployeeForm;
