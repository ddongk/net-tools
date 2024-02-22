import React, {ReactNode, useEffect, useState} from "react";
import {Button, ButtonGroup, CircularProgress, Modal, Stack} from "@mui/material";
import TextField from '@mui/material/TextField';
import './HostnamePage.css';
import ParentsModal from "../../components/modal/ParentsModal";

const HostnamePage = () => {

    const [hostName, setHostName] = useState('');
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        fetchHostName();
    }, []);

    const fetchHostName = async () => {
        try {
            const response = await fetch('http://ip.jsontest.com/');
            const data = await response.json();
            setHostName(data.ip);
        } catch (error) {
            console.error('에러: ', error);
            //호출 실패 시 알림 문구창 뜨게도 하면 좋을 듯
        } finally {
            setLoading(false);
            //호출 성공 시 알림 문구창 뜨게도 하면 좋을 듯
        }
    };

    //todo
    // 호스트네임페이지를 클릭할때마다 지금은 서버를 호출
    // 사실 호스트네임이란건 바뀔게없잖아요
    // 이런것도 로컬스토리지에 넣어놓는다던가
    // 캐시화를 해야된다.

    return (

        <div className="pageFrame">
            <div>
                {loading ? (<>
                    <div>
                    <img src="/images/logo-unipost-800x400.png" style={{ width: '130px', height: 'auto' }}/>
                    </div>
                        중앙 맞춰야 함
                    <div>
                        <CircularProgress />
                    </div>
                    </>
                ) : (
                    <>
                        <div className="title">
                            hostname
                        </div>
                        <div className="margin5px">
                            <TextField
                                id="outlined-read-only-input"
                                className="textfield-type1"
                                label="Current hostname"
                                defaultValue={hostName}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{ width: 500 }}
                            />
                        </div>
                        <div className="margin5px">
                            <TextField
                                required
                                id="outlined-required"
                                className="textfield-type1"
                                label="Set the new hostname"
                                placeholder="Enter the hostname"
                                sx={{ width: 500 }}
                            />
                        </div>
                        <div className="submit-Button">
                            <Button variant="contained" onClick={handleOpenModal} sx={{ width: 500, height: 40 }}>Submit</Button>
                        </div>
                        <ParentsModal open={modalOpen} onClose={handleCloseModal} modalTitle="hostname이 성공적으로 변경되었습니다." modalContent="확인"/>
                    </>
                )}

            </div>

        </div>

    );
}

export default HostnamePage;
