import React, {useEffect} from 'react';
import HostnamePage from "./pages/hostnamePage/HostnamePage";
import IpPage from "./pages/ipPage/IpPage";
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate} from "react-router-dom";
import NavigateButton from "./components/button/NavigateButton";
import PortproxyPage from "./pages/portproxyPage/PortproxyPage";
import ModifyPortproxyPage from "./pages/portproxyPage/ModifyPortproxyPage";
import Button from "@mui/material";

function App() {
    const location = useLocation();

    // React.useEffect(() => {
    //     if (location.pathname === '/') {
    //         window.location.href = '/pages/hostnamePage/HostnamePage';
    //     }
    // }, [location]);

    return (
            <div className="div-center">
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/pages/hostnamePage/HostnamePage" />} />
                        <Route path="*" element={<Navigate to="/pages/hostnamePage/HostnamePage" />} />
                        <Route path="/pages/hostnamePage/HostnamePage" element={<HostnamePage/>}/>
                        <Route path="/pages/ipPage/IpPage" element={<IpPage/>}/>
                        <Route path="/pages/portproxyPage/PortproxyPage" element={<PortproxyPage/>}/>
                        <Route path="/pages/portproxyPage/ModifyPortproxyPage" element={<ModifyPortproxyPage/>}/>
                    </Routes>
                </div>
                <div className="menu-bar">
                    <NavigateButton variant="outlined" buttonText="Hostname" path="/pages/hostnamePage/HostnamePage"/>
                    <NavigateButton variant="outlined" buttonText="Ip" path="/pages/ipPage/IpPage"/>
                    <NavigateButton variant="outlined" buttonText="Portproxy" path="/pages/portproxyPage/PortproxyPage"/>
                </div>
            </div>
    );
}

function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Root;
