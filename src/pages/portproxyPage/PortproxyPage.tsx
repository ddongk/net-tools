import React, {useEffect, useState} from "react";
import NavigateButton from "../../components/button/NavigateButton";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Button, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

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
        } catch (error) {
            console.error('에러: ', error);
            //호출 실패 시 알림 문구창 뜨게도 하면 좋을 듯
        } finally {
            // 로딩
            // 호출 성공 시 알림 문구창 뜨게도 하면 좋을 듯
        }
    };

    const columns: GridColDef[] = [
        {field: 'CO', headerName: '주소', width: 120},
        {field: 'IDEX_MVL', headerName: '포트', width: 120},
        {field: 'NO2', headerName: '주소', width: 120},
        {field: 'O3', headerName: '포트', type: 'number', width: 120},
    ];

    return (
        <div className="pageFrame">
            <div className="title">portproxy</div>
            <div>버튼을 오른쪽 아래에 동그란 버튼으로 놔두면 좋을 것 같음 그거 누르면 모달창(추가하는 거 창 나오게 ) 아니면 삭제는 네모칸으로, 추가는 동글칸으로</div>
            <div className="data-grid-container">
                <DataGrid
                    rows={portProxy}
                    rowHeight={40}
                    columns={columns}
                    style={{ width: '600px' }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        }
                    }}
                    checkboxSelection
                />
            </div>
            <div>
                <Button variant="outlined">ADD</Button>
                <Button variant="outlined" color="error">
                    DELETE
                </Button>
                <Fab color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </div>
        </div>
    );
};

export default PortproxyPage;