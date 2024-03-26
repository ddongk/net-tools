import {Box, Button, CircularProgress, Modal} from "@mui/material";
import React from "react";

const IpPage = () => {
    return (
        <div className="pageFrame">
            <div>
                <div className="loadingImage_unipost">
                    <img src="/images/logo-unipost-800x400.png" style={{width: '130px', height: 'auto'}}/>
                </div>
                <div className="loadingImage_circle">
                    <CircularProgress/>
                </div>
            </div>
        </div>

    );
}

export default IpPage;
