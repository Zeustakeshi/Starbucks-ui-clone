import React from "react";
import Lottie from "lottie-react";
import notfoundJSON from "../assets/notfound.json";
import Highlight from "../components/Highlight/Highlight";
import Button from "../components/Button/Button";

const Notfound = () => {
    return (
        <div className="app-container flex justify-center items-center gap-10 w-full h-screen">
            <div className=" flex flex-col justify-center items-center w-full h-full ">
                <h1 className="text-[#047044] text-8xl font-bold text-center">
                    404
                </h1>
                <p className=" my-3 flex justify-center text-4xl font-medium">
                    <Highlight isAnimation>
                        <span className="block px-8 py-6">Page Not Found</span>
                    </Highlight>
                </p>
                <p className="text-xl text-gray-600 text-center my-5 max-w-[80%] mx-auto">
                    We're sorry, the page you requested could not be found
                    Please go back to the homepage
                </p>
                <div className="w-full flex justify-center">
                    <Button type="secondary" to="/">
                        GO HOME
                    </Button>
                </div>
            </div>
            <Lottie animationData={notfoundJSON}></Lottie>
        </div>
    );
};

export default Notfound;
