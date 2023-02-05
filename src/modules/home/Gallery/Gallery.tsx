import React, { useEffect, useRef, useState } from "react";
import coffee1 from "../../../assets/Coffee_01.png";
import coffee2 from "../../../assets/Coffee_02.png";
import coffee3 from "../../../assets/Coffee_03.png";

type HoverDirection = "left" | "right" | "none";

const Gallery = () => {
    const galleryRef = useRef<HTMLUListElement>(null);
    const [hoverDirection, setHoverDirection] =
        useState<HoverDirection>("none");

    useEffect(() => {
        const handleMousemove = (e: MouseEvent) => {
            if (galleryRef.current) {
                const galleryPosition =
                    galleryRef.current.getBoundingClientRect();
                const x = e.pageX - galleryPosition.left - window.scrollX;
                const y = e.pageY - galleryPosition.top - window.scrollY;
                if (
                    x >= 0 &&
                    x <= galleryPosition.width &&
                    y >= 0 &&
                    y <= galleryPosition.height
                ) {
                    if (
                        x <= galleryPosition.width / 2 &&
                        hoverDirection !== "right"
                    ) {
                        setHoverDirection("right");
                    } else if (hoverDirection !== "left") {
                        setHoverDirection("left");
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
        <div className="app-container gallery-wrapper mt-5 ">
            <ul
                ref={galleryRef}
                className={`gallery-content ${
                    hoverDirection !== "none"
                        ? `gallery-content--hover-${hoverDirection}`
                        : ""
                } flex justify-center items-center`}
            >
                <GalleryItem src={coffee2} hoverDirection={hoverDirection} />
                <GalleryItem src={coffee1} hoverDirection={hoverDirection} />
                <GalleryItem src={coffee3} hoverDirection={hoverDirection} />
            </ul>
        </div>
    );
};

interface IGalleryItem {
    src: string;
    style?: React.CSSProperties;
    className?: string;
    hoverDirection: HoverDirection;
}

const GalleryItem = ({
    src,
    className,
    style,
    hoverDirection,
    ...props
}: IGalleryItem) => {
    return (
        <li className={`galleryItem-wrapper ${className || ""} `} style={style}>
            <div
                className={`galleryItem ${
                    hoverDirection !== "none"
                        ? `galleryItem--hover-${hoverDirection}`
                        : ""
                } `}
            >
                <img
                    className="w-full h-full object-contain"
                    src={src}
                    {...props}
                />
            </div>
        </li>
    );
};

export default Gallery;
