import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Button from "../../../components/Button/Button";
import Highlight from "../../../components/Highlight/Highlight";
import coffee04 from "../../../assets/Coffee_04.png";
import overplay from "../../../assets/overplay-banner-menu.png";
import cartJSON from "../../../assets/cart.json";

import "./banner.css";

const Banner = () => {
    return (
        <div className="mt-10 flex justify-between items-center gap-10">
            <div className="flex flex-col justify-center items-start gap-6">
                <h2 className="text-5xl text-[#434343]  leading-relaxed">
                    <p>
                        Enjoy your{" "}
                        <Highlight isAnimation>
                            <span className="px-1">coffee</span>
                        </Highlight>
                    </p>
                    <p>before your activity</p>
                </h2>
                <h4 className="text-base font-normal text-[#7E7D7A] max-w-[400px]">
                    Boost your productivity and build your mood with a glass of
                    coffee in the morning
                </h4>
                <div className="flex justify-start items-center gap-5">
                    <Button type="secondary">
                        <div className="flex justify-center items-center w-full h-full gap-2">
                            <span>Order now</span>
                        </div>
                    </Button>
                    <Button type="third">More menu</Button>
                </div>
            </div>
            <BannerImage></BannerImage>
        </div>
    );
};

type HoverDirection = "left" | "right" | "none";

const BannerImage = () => {
    const [hoverDirection, setHoverDirection] =
        useState<HoverDirection>("none");

    const bannerImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMousemove = (e: MouseEvent) => {
            if (bannerImageRef.current) {
                const imagePosition =
                    bannerImageRef.current.getBoundingClientRect();
                const x = e.pageX - imagePosition.left - window.scrollX;
                const y = e.pageY - imagePosition.top - window.scrollY;
                if (
                    x >= 0 &&
                    x <= imagePosition.width &&
                    y >= 0 &&
                    y <= imagePosition.height
                ) {
                    if (
                        x <= imagePosition.width / 2 &&
                        hoverDirection !== "left"
                    ) {
                        setHoverDirection("left");
                    } else if (hoverDirection !== "right") {
                        setHoverDirection("right");
                    }
                } else {
                    setHoverDirection("none");
                }
            }
        };
        window.addEventListener("mousemove", handleMousemove);

        return () => window.removeEventListener("mousemove", handleMousemove);
    }, []);

    return (
        <div
            className={`img-wrapper ${
                hoverDirection !== "none"
                    ? `img-wrapper-hover--${hoverDirection}`
                    : ""
            }`}
        >
            <div ref={bannerImageRef} className="img-frame">
                <BannerRating id={1}>Cappuccino</BannerRating>
                <BannerRating id={2}>
                    <span>4.8</span>
                    <span>
                        {" "}
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.4269 1.63301C10.7469 0.78901 11.9579 0.78901 12.2789 1.63301L14.3489 7.36701C14.4212 7.5538 14.5483 7.71429 14.7136 7.8273C14.879 7.94032 15.0747 8.00054 15.2749 8.00001H20.3619C21.3019 8.00001 21.7119 9.17001 20.9729 9.74301L17.3529 13C17.1908 13.1247 17.0723 13.2975 17.0144 13.4937C16.9566 13.6898 16.9624 13.8993 17.0309 14.092L18.3529 19.695C18.6749 20.595 17.6329 21.368 16.8449 20.814L11.9279 17.694C11.7596 17.5757 11.5588 17.5122 11.3529 17.5122C11.1471 17.5122 10.9463 17.5757 10.7779 17.694L5.86094 20.814C5.07394 21.368 4.03094 20.594 4.35294 19.695L5.67494 14.092C5.74352 13.8993 5.7493 13.6898 5.69145 13.4937C5.6336 13.2975 5.5151 13.1247 5.35294 13L1.73294 9.74301C0.992944 9.17001 1.40494 8.00001 2.34294 8.00001H7.42994C7.63024 8.00068 7.82601 7.94051 7.99136 7.82748C8.15671 7.71445 8.28385 7.55388 8.35594 7.36701L10.4259 1.63301H10.4269Z"
                                fill="#FFD057"
                                stroke="#FFD057"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </BannerRating>
                <BannerRating id={3}>18K</BannerRating>
                <img
                    src={overplay}
                    className="w-full h-full object-contain"
                    alt=""
                />
                <div className="img-content w-[350px] h-[350px]">
                    <img
                        className="w-full h-full object-contain"
                        src={coffee04}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

const BannerRating = ({
    children,
    id,
}: {
    children: React.ReactNode;
    id: number;
}) => {
    return <div className={`rating rating-${id}`}>{children}</div>;
};

export default Banner;
