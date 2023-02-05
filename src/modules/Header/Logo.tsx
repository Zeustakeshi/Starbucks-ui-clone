import React from "react";
import Lottie from "lottie-react";
import beeJSON from "../../assets/Bee.json";

import logo from "../../assets/logo.svg";
const Logo = () => {
    return (
        <div className="logo-wrapper w-[96px] h-[97px] ">
            <a
                href=""
                className="logo-content flex justify-center items-center w-full h-full"
            >
                <img className="logo-img" src={logo} alt="" />
            </a>
            <div className="bee-behind-logo">
                <Lottie animationData={beeJSON} />
            </div>
        </div>
    );
};

export default Logo;
