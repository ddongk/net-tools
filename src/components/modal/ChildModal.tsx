import React from "react";
import { Button, Modal, Box } from "@mui/material";

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

interface ChildModalProps {
    open: boolean;
    onClose: () => void;
    onNoClick: () => void;
}

const ChildModal: React.FC<ChildModalProps> = ({ open, onClose, onNoClick }) => {
    const handleClose = () => {
        onClose();
    };

    const handleNoClick = () => {
        onClose();
        onNoClick();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">재시작 ㄱㄱ?</h2>
                <p id="child-modal-description">
                    재시작을 해야 변경됨
                </p>
                <Button onClick={handleClose}>예</Button>
                <Button onClick={handleNoClick}>아니요</Button>
            </Box>
        </Modal>
    );
}

export default ChildModal;
