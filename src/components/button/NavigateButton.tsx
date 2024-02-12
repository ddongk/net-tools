import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const NavigateButton = ({buttonText, path, variant}: {buttonText: string, path: string, variant?: "text" | "outlined" | "contained"}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };


    return (
        <>
        <Button variant={variant} onClick={handleClick}>{buttonText}</Button>
        </>
    );

}

export default NavigateButton;

