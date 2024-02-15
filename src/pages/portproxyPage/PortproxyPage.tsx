import React, {useEffect, useState} from "react";
import NavigateButton from "../../components/button/NavigateButton";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from "@mui/material";

interface PortProxyData {
    id: number;
    CO: number;
    IDEX_MVL: number;
    NO2: number;
    O3: number;
}
const PortproxyPage = () => {

    const [portProxy, setPortProxy] = useState<PortProxyData[]>([]);

    useEffect(() => {
        fetchPortProxy();
    }, []);

    const fetchPortProxy = async () => {
        try {
            const response = await fetch('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99');
            const data = await response.json();
            const dataWithID = data.RealtimeCityAir.row.map((row: PortProxyData, index: number) => ({
                ...row,
                id: index + 1
            }));
            setPortProxy(dataWithID);
        } catch (error){
            console.error('에러: ', error);
            //호출 실패 시 알림 문구창 뜨게도 하면 좋을 듯
        } finally {
            // 로딩
            // 호출 성공 시 알림 문구창 뜨게도 하면 좋을 듯
        }
    };

    const columns: GridColDef[] = [
        { field: 'CO', headerName: 'ID', width: 40 },
        { field: 'IDEX_MVL', headerName: 'First name', width: 90 },
        { field: 'NO2', headerName: 'Last name', width: 90 },
        { field: 'O3', headerName: 'Age', type: 'number', width: 90},
    ];

    return (
        <>
            <h1>portproxy</h1>
            <div>퐅픍싀</div>
            <Button variant="outlined">ADD</Button>
            <Button variant="outlined" color="error">
                DELETE
            </Button>
            <DataGrid
                rows={portProxy}
                columns={columns}
                hideFooterPagination={true}
                checkboxSelection //체크 후 삭제 버튼 클릭 이벤트 만들 예정
            />
        </>
    );
};

export default PortproxyPage;