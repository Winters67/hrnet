import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { MenuItem } from '@mui/material';
import { deleteEmployee } from '../../reducers/employeesReducer';
import "./EmployeList.scss"

function EmployeeList() {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees.list);
    console.log(employees)

    const handleDelete = (employeeId) => {
        dispatch(deleteEmployee({ id: employeeId }));
        console.info('Deleted employee with ID:', employeeId);
        console.log(employeeId)
    };

    // Définir les colonnes
    const columns = React.useMemo(
        () => [
            { header: 'First Name', accessorKey: 'firstName' },
            { header: 'Last Name', accessorKey: 'lastName' },
            { header: 'Start Date', accessorKey: 'startDate' },
            { header: 'Department', accessorKey: 'department' },
            { header: 'Date of Birth', accessorKey: 'dateOfBirth' },
            { header: 'Street', accessorKey: 'street' },
            { header: 'City', accessorKey: 'city' },
            { header: 'State', accessorKey: 'state' },
            { header: 'Zip Code', accessorKey: 'zipCode' },
        ],
        []
    );

    return (
        <div id="employee-div" className="container">
            <div className='TitleEmployees'>
                <h1>Current Employee</h1>
                <h2>Current Employee</h2>
            </div>

            <MaterialReactTable
                className="myMaterialTable centeredHeader"
                columns={columns}
                data={employees}
                defaultColumn={{
                    minSize: 20,
                    maxSize: 100,
                }}
                enableRowActions
                renderRowActionMenuItems={({ row }) => [
                    <MenuItem key="delete" onClick={() => {
                        console.log(row.original); // Print the 'original' object to see its structure
                        handleDelete(row.original.id);
                    }}>
                        Delete
                    </MenuItem>
                ]}

            />
        </div>
    );
}

export default EmployeeList;
