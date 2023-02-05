import React from "react";
import Lottie from "lottie-react";
import locationJSON from "../../assets/location.json";

const Navbar = () => {
    return (
        <nav className="flex-1 justify-end flex items-center">
            <ul className="flex-1 w-full h-full flex justify-end items-center gap-5 px-10">
                <NavItem link="#">Home</NavItem>
                <NavItem link="#">Menu</NavItem>
                <NavItem link="#">What's New</NavItem>
                <NavItem link="#">Contact</NavItem>
            </ul>
            <FindStore></FindStore>
        </nav>
    );
};

interface INavItem {
    link: string;
    children: React.ReactNode;
}

const NavItem = ({ link, children }: INavItem) => {
    return (
        <li className="nav-item ">
            <div className="nav-item-content">
                <a className="nav-item-text" href={link}>
                    {children}
                </a>
            </div>
        </li>
    );
};

const FindStore = () => {
    return (
        <div className="flex justify-center items-center cursor-pointer">
            <div className="w-[50px] h-[50px] ">
                <Lottie animationData={locationJSON} />
            </div>
            <p className="text-[18px] font-medium">Find a store</p>
        </div>
    );
};

export default Navbar;
