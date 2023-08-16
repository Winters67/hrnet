import React, { useReducer, useState } from 'react';
import { addEmployee } from '../../reducers/employeesReducer';
import { useDispatch } from 'react-redux';
import { states } from '../../data/data';
import './Formulaire.scss';
import InputField from '../InputField/InputField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';
import ErrorMessage from '../Error/ErrorMessage';
import validateForm from '../utils/validateForm';


// État initial du formulaire d'employé
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


// Reducer pour gérer les mises à jour de l'état du formulaire
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

// Composant de formulaire d'employé
function EmployeeForm() {

    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const reduxDispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);

    // Gestionnaire de changements pour les champs du formulaire
    const handleChange = (e) => {
        let name, value;

        // Si c'est un événement de react-dropdown
        if (e.value && e.label) {
            name = 'state';
            value = e.value;
        } else {
            name = e.target.name;
            value = e.target.value;
        }
        if (value instanceof Date) {
            value = `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
        }

        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            value: value,
        });
    };

    const saveEmployee = () => {
        const formErrors = validateForm(state);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const employeeWithId = {
                ...state,
                id: uuidv4()
            };

            reduxDispatch(addEmployee(employeeWithId));
            setModalOpen(true);
        } else {
            console.log('Form errors:', formErrors);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveEmployee();
    };

    const closeModal = () => setModalOpen(false);



    // Options pour le menu déroulant des États et des départements
    const options = states.map(s => ({ value: s.abbreviation, label: s.name }));

    const departmentOptions = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' }
    ];




    return (
        <div className="container">
            <div className='titleCreate'>

                <h1>Create Employee</h1>
                <h2>Create Employee</h2>
            </div>

            <form id="create-employeec" onSubmit={(e) => handleSubmit}>
                <div className='inputContainer'>
                    <InputField
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                        label="First Name"
                    />
                    <ErrorMessage errors={errors} field="firstName" />
                </div>
                <div className='inputContainer'>
                    <InputField
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                        label="Last Name"
                    />
                    <ErrorMessage errors={errors} field="lastName" />
                </div>
                <div className='inputContainer'>
                    <DatePicker
                        selected={state.dateOfBirth ? new Date(state.dateOfBirth) : null}
                        onChange={date => handleChange({ target: { name: "dateOfBirth", value: date } })}
                        dateFormat="yyyy-MM-dd"
                        customInput={<InputField label="Date of Birth" />}
                    />
                    <ErrorMessage errors={errors} field="dateOfBirth" />
                </div>
                <div className='inputContainer'>
                    <DatePicker
                        selected={state.startDate ? new Date(state.startDate) : null}
                        onChange={date => handleChange({ target: { name: "startDate", value: date } })}
                        dateFormat="yyyy-MM-dd"
                        customInput={<InputField label="Start Date" />}

                    />
                    <ErrorMessage errors={errors} field="startDate" />
                </div>



                <fieldset className="address">
                    <legend>Address</legend>

                    <div className='inputContainer'>
                        <InputField
                            name="street"
                            value={state.street}
                            onChange={handleChange}
                            label="Street"
                        />
                        <ErrorMessage errors={errors} field="street" />
                    </div>

                    <div className='inputContainer'>
                        <InputField
                            name="city"
                            value={state.city}
                            onChange={handleChange}
                            label="City"
                        />
                        <ErrorMessage errors={errors} field="city" />
                    </div>

                    <div className='dropdown'>
                        <label htmlFor="state">State</label>
                        <Dropdown
                            options={options}
                            onChange={handleChange}
                            value={state.state}
                            placeholder="Select a state"
                        />
                    </div>




                    <InputField
                        name="zipCode"
                        value={state.zipCode}
                        onChange={handleChange}
                        label="Zip Code"
                    />
                    <ErrorMessage errors={errors} field="zipCode" />

                </fieldset>
                <div className='dropdown'>
                    <label htmlFor="department">Department</label>
                    <Dropdown
                        options={departmentOptions}
                        onChange={handleChange}
                        value={state.department}
                        placeholder="Select a department"
                    />
                </div>



                <button className='buttonSave' type="button" onClick={saveEmployee}>Save</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </form>
        </div>
    );
}

export default EmployeeForm;