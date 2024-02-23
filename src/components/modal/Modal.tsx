import {Box, Button, Modal} from "@mui/material";
import React from "react";
//
// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
// };
//
// function ChildModal({onClose}: { onClose: () => void }) {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//         onClose();
//     };
//
//     return (
//         <React.Fragment>
//             <Button onClick={handleOpen}>확인</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="child-modal-title"
//                 aria-describedby="child-modal-description"
//             >
//                 <Box sx={{...style, width: 200}}>
//                     <h2 id="child-modal-title">재시작 ㄱㄱ?</h2>
//                     <p id="child-modal-description">
//                         재시작을 해야 변경됨
//                     </p>
//                     <Button onClick={handleClose}>예</Button>
//                     <Button onClick={handleClose}>아니요</Button>
//                 </Box>
//             </Modal>
//         </React.Fragment>
//     );
// }
//
// const ParentsModal = () => {
//
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };
//     const handleCloseAll = () => {
//         handleClose();
//     };
//     return (
//         <>
//
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="parent-modal-title"
//                 aria-describedby="parent-modal-description"
//             >
//                 <Box sx={{...style, width: 400}}>
//                     <h2 id="parent-modal-title">hostname이 성공적으로 변경되었습니다.</h2>
//                     <p id="parent-modal-description">
//                         192.168.10.91 -&gt;  192.168.10.92
//                     </p>
//                     <ChildModal onClose={handleCloseAll}/>
//                 </Box>
//             </Modal>
//         </>
//
//     );
// }
//
// export {ParentsModal};