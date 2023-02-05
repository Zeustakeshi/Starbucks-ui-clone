import React from "react";
import Button from "../../../components/Button";
import Highlight from "../../../components/Highlight";
import mainCoffee from "../../../assets/Main Coffee.png";

const Banner = () => {
    return (
        <div className="app-container mt-10">
            <div className="px-2 flex justify-between items-start ">
                <div className="py-10 ">
                    <div>
                        <BannerTitle></BannerTitle>
                        <p className="text-sm leading-6">
                            Since 1971, it always has been and will always be
                            about quality. We’re passionate about ethically
                            sourcing only the finest Arabica coffee beans and
                            roasting them with great care. Our passion for
                            coffee is rivaled only by our love of sharing it.
                        </p>
                    </div>
                    <Button type="primary" style={{ marginTop: 30 }}>
                        Learn More
                    </Button>
                </div>
                <div className="relative min-w-[400px] min-h-[538px] flex justify-center items-center">
                    {/* <CanvasImagePixels src={mainCoffee} /> */}
                    <img
                        className="w-full h-full object-contain"
                        src={mainCoffee}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

const BannerTitle = () => {
    return (
        <div className="py-5 text-5xl text-[#434343]  leading-relaxed">
            <p>
                It’s not just <Highlight isAnimation>Coffee</Highlight>{" "}
            </p>
            <p>
                It’s <Highlight isAnimation>Starbucks</Highlight>
            </p>
        </div>
    );
};

export default Banner;
