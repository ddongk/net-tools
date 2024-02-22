import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import ChildModal from "./ChildModal";

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

const ParentsModal: React.FC<{ open: boolean; onClose: () => void; modalTitle: string; modalContent: string }> = ({ open, onClose, modalTitle, modalContent}) => {
    const [childModalOpen, setChildModalOpen] = useState(false);

    const handleChildModalOpen = () => {
        setChildModalOpen(true);
    };

    const handleChildModalClose = () => {
        setChildModalOpen(false);
    };

    const handleNoClick = () => {
        onClose();
        handleChildModalClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">{modalTitle}</h2>
                <p id="parent-modal-description">
                    192.168.10.91 -&gt;  192.168.10.92
                </p>
                <Button onClick={handleChildModalOpen}></Button>
                <ChildModal open={childModalOpen} onClose={handleChildModalClose} onNoClick={handleNoClick} />
            </Box>
        </Modal>
    );
}

export default ParentsModal;
