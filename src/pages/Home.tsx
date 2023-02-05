import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Banner from "../modules/home/Banner/Banner";
import Gallery from "../modules/home/Gallery/Gallery";

const Home = () => {
    return (
        <MainLayout>
            <Banner></Banner>
            <Gallery></Gallery>
        </MainLayout>
    );
};

export default Home;
