import React, {useEffect, useState} from "react";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Button, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {defaultUrl} from "../../utils/common";
import PortProxyModal from "../../components/modal/PortProxyModal";
import ParentsModal from "../../components/modal/ParentsModal";

interface PortProxyData {
    id: number;
    listenAddress: String;
    listenPort: String;
    connectAddress: String;
    connectPort: String;
}
const PortproxyPage = () => {

    const [portProxy, setPortProxy] = useState<PortProxyData[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenDelModal = () => {
        setDeleteModalOpen(true);
    };
    const handleCloseDelModal = () => {
        setDeleteModalOpen(false);
    };

    useEffect(() => {
        fetchPortProxy();
    }, []);

    const fetchPortProxy = async () => {
        try {
            const response = await fetch(`${defaultUrl}/getPortProxy`);
            const responseData = await response.json();
            const dataArray = responseData.data;
            const dataWithID = dataArray.map((item: any, index: number) => ({
                ...item,
                id: index + 1
            }));
            setPortProxy(dataWithID);
        } catch (error) {
            console.error('에러: ', error);
            //호출 실패 시 알림 문구창 뜨게도 하면 좋을 듯
        } finally {
            // 로딩
            // 호출 성공 시 알림 문구창 뜨게도 하면 좋을 듯
            // -> 이건 없어도 될듯. 호출 실패 시만 ㄱㄱ
        }
    };

    const columns: GridColDef[] = [
        {field: 'listenAddress', headerName: '주소', width: 120},
        {field: 'listenPort', headerName: '포트', width: 120},
        {field: 'connectAddress', headerName: '주소', width: 120},
        {field: 'connectPort', headerName: '포트', type: 'number', width: 120},
    ];

    return (
        <div className="pageFrame">
            <div className="title">portproxy</div>
            <Button variant="outlined" color="error" onClick={handleOpenDelModal}>
                DELETE
            </Button>
            <div className="data-grid-container">
                <DataGrid
                    rows={portProxy}
                    rowHeight={40}
                    columns={columns}
                    style={{width: '600px'}}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 5},
                        }
                    }}
                    checkboxSelection
                />
            </div>
            <div>
                <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
                    <AddIcon/>
                </Fab>
                <PortProxyModal open={modalOpen} onClose={handleCloseModal} modalTitle="portproxy 변!경!" modalContent=""/>
                <ParentsModal open={deleteModalOpen} onClose={handleCloseDelModal} modalTitle="portproxy 삭?제?" modalContent="00 12312  213 124 를 삭제하시겠습니까~~?" childModal={false}/>
            </div>
        </div>
    );
};

export default PortproxyPage;