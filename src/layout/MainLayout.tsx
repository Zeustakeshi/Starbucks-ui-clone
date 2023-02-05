import React from "react";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import SocialMedia from "../modules/home/SocialMedia/SocialMedia";

interface IMainLayout {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Header></Header>
            {children}
            <Footer></Footer>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default MainLayout;
