import React, {useEffect, useState} from 'react';
import HostnamePage from "./pages/hostnamePage/HostnamePage";
import IpPage from "./pages/ipPage/IpPage";
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate} from "react-router-dom";
import PortproxyPage from "./pages/portproxyPage/PortproxyPage";
import ModifyPortproxyPage from "./pages/portproxyPage/ModifyPortproxyPage";
import {IconButton} from '@mui/material';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';

function App() {

    const [sideMenu, setSideMenu] = useState(false);
    const navigate = useNavigate();
    const [title, setTitle] = useState('hostname');
    const handleOpenSideMenu = () => {
        setSideMenu(true);
    }
    const handleCloseSideMenu = () => {
        setSideMenu(false);
    }
    useEffect(() => {
        setTitle('hostname');
    }, []);
    return (
        <div className="div-center">
            <div>
                <div className="titleNmenu">
                    <div className="titleText">{title}</div>
                    <div className="menuBtn"><IconButton onClick={handleOpenSideMenu}><MenuIcon/></IconButton></div>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/pages/hostnamePage/HostnamePage"/>}/>
                        <Route path="*" element={<Navigate to="/pages/hostnamePage/HostnamePage"/>}/>
                        <Route path="/pages/hostnamePage/HostnamePage" element={<HostnamePage/>}/>
                        <Route path="/pages/ipPage/IpPage" element={<IpPage/>}/>
                        <Route path="/pages/portproxyPage/PortproxyPage" element={<PortproxyPage/>}/>
                        <Route path="/pages/portproxyPage/ModifyPortproxyPage" element={<ModifyPortproxyPage/>}/>
                    </Routes>
                </div>
            </div>
            <div className="menu-bar">
                {/*<IconButton onClick={handleOpenSideMenu}><MenuIcon/></IconButton>*/}
                <Drawer anchor="right" open={sideMenu} onClose={handleCloseSideMenu}>
                    <List>
                        <ListItem button onClick={() => {
                            navigate("/pages/hostnamePage/HostnamePage");
                            handleCloseSideMenu();
                            setTitle('hostname');
                        }}>
                            <ListItemText primary="Hostname"/>
                        </ListItem>
                        <ListItem button onClick={() => {
                            navigate("/pages/ipPage/IpPage");
                            handleCloseSideMenu();
                            setTitle('ip');
                        }}>
                            <ListItemText primary="Ip"/>
                        </ListItem>
                        <ListItem button onClick={() => {
                            navigate("/pages/portproxyPage/PortproxyPage");
                            handleCloseSideMenu();
                            setTitle('portproxy');
                        }}>
                            <ListItemText primary="Portproxy"/>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </div>
    );
}

function Root() {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

export default Root;
