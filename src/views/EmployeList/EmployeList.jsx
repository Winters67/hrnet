import React from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

function EmployeeList() {
    const employees = useSelector(state => state.employees.list);
    console.log(employees);

    const columns = React.useMemo(
        () => [
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Start Date', accessor: 'startDate' },
            { Header: 'Department', accessor: 'department' },
            { Header: 'Date of Birth', accessor: 'dateOfBirth' },
            { Header: 'Street', accessor: 'street' },
            { Header: 'City', accessor: 'city' },
            { Header: 'State', accessor: 'state' },
            { Header: 'Zip Code', accessor: 'zipCode' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: employees });

    return (
        <div id="employee-div" className="container">
            <div className='TitleEmployees'>
                <h1>Current Employee</h1>
            </div>
            
            <table {...getTableProps()} className="display">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
