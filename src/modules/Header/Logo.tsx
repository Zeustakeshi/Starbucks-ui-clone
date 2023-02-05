import React from "react";
import Lottie from "lottie-react";
import beeJSON from "../../assets/Bee.json";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
const Logo = () => {
    const navgation = useNavigate();
    const handleGoToHome = () => {
        navgation("/");
    };

    return (
        <div
            onClick={handleGoToHome}
            className="logo-wrapper w-[80px] h-[80px] "
        >
            <NavLink
                to="/"
                className="logo-content flex justify-center items-center w-full h-full"
            >
                <img className="logo-img" src={logo} alt="" />
            </NavLink>
            <div className="bee-behind-logo">
                <Lottie animationData={beeJSON} />
            </div>
        </div>
    );
};

export default Logo;
