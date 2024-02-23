import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import {defaultUrl} from "../../utils/common";
import TextField from "@mui/material/TextField";

interface CreatePortProxyData {
    createListenAddress: String;
    createListenPort: String;
    createConnectAddress: String;
    createConnectPort: String;
}

interface PortProxyModalProps {
    open: boolean;
    onClose: () => void;
    modalTitle: string;
    modalContent?: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const PortProxyModal: React.FC<PortProxyModalProps> = ({ open, onClose, modalTitle, modalContent}) => {

    const [newPortProxyData, setNewPortProxyData] = useState<CreatePortProxyData[]>([]);


    const submitPortProxy = async () => {
        
        onClose();// 임시용도
        
        try {

            const response = await fetch(`${defaultUrl}/setPortProxy`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPortProxyData)
            });
            if (response.ok) {
                console.log('전송 성공');
                onClose();
            } else {
                console.error('전송 실패: ', response.statusText);
            }
        } catch (error) {
            console.error('에러: ', error);
        }
    };
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 500 }}>
                <h2 id="parent-modal-title">{modalTitle}</h2>
                <p id="parent-modal-description">
                    {modalContent}
                </p>
                <div className="margin5px">
                <TextField
                    required
                    id="outlined-required"
                    className="textfield-type1"
                    label="listenAddress"
                    placeholder="Enter the hostname"
                    defaultValue=""
                    onChange={(event: any) => {
                        setNewPortProxyData(event.target.value);
                    }}
                    sx={{ width: 500 }}
                />
                </div>
                <div className="margin5px">
                <TextField
                    required
                    id="outlined-required"
                    className="textfield-type1"
                    label="listenPort"
                    placeholder="Enter the hostname"
                    defaultValue=""
                    onChange={(event: any) => {
                        setNewPortProxyData(event.target.value);
                    }}
                    sx={{ width: 500 }}
                />
                </div>
                <div className="margin5px">
                <TextField
                    required
                    id="outlined-required"
                    className="textfield-type1"
                    label="connectAddress"
                    placeholder="Enter the hostname"
                    defaultValue=""
                    onChange={(event: any) => {
                        setNewPortProxyData(event.target.value);
                    }}
                    sx={{ width: 500 }}
                />
                </div>
                <div className="margin5px">
                <TextField
                    required
                    id="outlined-required"
                    className="textfield-type1"
                    label="connectPort"
                    placeholder="Enter the hostname"
                    defaultValue=""
                    onChange={(event: any) => {
                        setNewPortProxyData(event.target.value);
                    }}
                    sx={{ width: 500 }}
                />
                </div>
                <div className="submit-Button">
                <Button variant="contained" onClick={submitPortProxy} sx={{ width: 500, height: 40 }}>확인</Button>
                </div>
            </Box>
        </Modal>
    );
}

export default PortProxyModal;
