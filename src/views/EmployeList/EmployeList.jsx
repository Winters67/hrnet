import React from 'react';
import { useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';

function EmployeeList() {
    const employees = useSelector(state => state.employees.list);

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

            <MaterialReactTable columns={columns} data={employees} />
        </div>
    );
}

export default EmployeeList;
