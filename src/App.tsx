import { useState } from "react";
import Banner from "./components/Layout/Banner";
import Footer from "./components/Layout/Footer";
import Gallery from "./components/Layout/Gallery";
import Header from "./components/Layout/Header";
import SocialMedia from "./components/Layout/SocialMedia";

function App() {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Header></Header>
            <Banner></Banner>
            <Gallery></Gallery>
            <Footer></Footer>
            <SocialMedia></SocialMedia>
        </div>
    );
}

export default App;
