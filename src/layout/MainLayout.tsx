import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoveToTopButton from "../components/Button/MoveToTopButton";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import SocialMedia from "../modules/SocialMedia/SocialMedia";

interface IMainLayout {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    const { pathname } = useLocation();
    useEffect(() => {
        const name = pathname.replaceAll("/", "");
        document.title = `${
            name
                ? `${
                      name.charAt(0).toUpperCase() + name.slice(1)
                  }: Starbucks Coffee`
                : "Starbucks Coffee"
        }`;
    }, []);
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Header></Header>
            {children}
            <Footer></Footer>
            <SocialMedia></SocialMedia>
            <MoveToTopButton></MoveToTopButton>
        </div>
    );
};

export default MainLayout;
