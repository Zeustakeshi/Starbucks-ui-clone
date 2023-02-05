import React from "react";
import Lottie from "lottie-react";
import locationJSON from "../../assets/location.json";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex-1 justify-end flex items-center">
            <ul className="flex-1 w-full h-full flex justify-end items-center gap-5 px-10">
                <NavItem link="/">Home</NavItem>
                <NavItem link="/menu">Menu</NavItem>
                <NavItem link="/what-new">What's New</NavItem>
                <NavItem link="/about-us">About us </NavItem>
                <NavItem link="/contact">Contact</NavItem>
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
                <NavLink className="nav-item-text" to={link}>
                    {children}
                </NavLink>
            </div>
        </li>
    );
};

const FindStore = () => {
    return (
        <NavLink
            to="https://www.starbucks.com/store-locator"
            className="flex justify-center items-center cursor-pointer"
        >
            <div className="block w-[50px] h-[50px] ">
                <Lottie animationData={locationJSON} />
            </div>
            <p className="text-[18px] font-medium">Find a store</p>
        </NavLink>
    );
};

export default Navbar;
