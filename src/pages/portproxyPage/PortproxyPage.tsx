import React from "react";
import NavigateButton from "../../components/button/NavigateButton";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const PortproxyPage = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'firstName', headerName: 'First name', width: 90 },
        { field: 'lastName', headerName: 'Last name', width: 90 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90},
        { field: 'fullName', headerName: 'Full name', sortable: false, width: 50 }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <>
            <h1>portproxy</h1>
            <div>퐅픍싀</div>
            <NavigateButton variant="outlined" buttonText="modify" path="/components/portproxyPage/ModifyPortproxyPage"/>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[1, 10]}
                checkboxSelection
            />
        </>
    );
};

export default PortproxyPage;