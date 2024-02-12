import React, {useEffect} from 'react';
import HostnamePage from "./components/hostnamePage/HostnamePage";
import IpPage from "./components/ipPage/IpPage";
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import NavigateButton from "./components/button/NavigateButton";
import PortproxyPage from "./components/portproxyPage/PortproxyPage";
import ModifyPortproxyPage from "./components/portproxyPage/ModifyPortproxyPage";
import Button from "@mui/material";

function App() {
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === '/') {
            window.location.href = '/components/hostnamePage/HostnamePage';
        }
    }, [location]);

    return (
        // <BrowserRouter>
            <div className="div-center">
                <div>
                    <Routes>
                        <Route path="/components/hostnamePage/HostnamePage" element={<HostnamePage/>}/>
                        <Route path="/components/ipPage/IpPage" element={<IpPage/>}/>
                        <Route path="/components/portproxyPage/PortproxyPage" element={<PortproxyPage/>}/>
                        <Route path="/components/portproxyPage/ModifyPortproxyPage" element={<ModifyPortproxyPage/>}/>
                    </Routes>
                </div>
                <div className="menu-bar">
                    <NavigateButton variant="outlined" buttonText="HostnamePage" path="/components/hostnamePage/HostnamePage"/>
                    <NavigateButton variant="outlined" buttonText="IpPage" path="/components/ipPage/IpPage"/>
                    <NavigateButton variant="outlined" buttonText="PortproxyPage" path="/components/portproxyPage/PortproxyPage"/>
                </div>
            </div>
        //</BrowserRouter>
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
