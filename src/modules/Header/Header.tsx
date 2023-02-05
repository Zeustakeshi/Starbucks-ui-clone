import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "./header.css";

const Header = () => {
    return (
        <header
            id="header"
            className="w-full flex justify-center items-center "
        >
            <div className="header-content py-4 app-container flex justify-between items-center">
                <Logo></Logo>
                <Navbar></Navbar>
            </div>
        </header>
    );
};

export default Header;
