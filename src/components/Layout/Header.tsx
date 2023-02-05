import React from "react";
import Logo from "../Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="w-full flex justify-center items-center ">
            <div className="py-4 app-container flex justify-between items-center">
                <Logo></Logo>
                <Navbar></Navbar>
            </div>
        </header>
    );
};

export default Header;
