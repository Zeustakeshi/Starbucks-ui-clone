import React, { useEffect, useRef } from "react";
import Animation from "./AnimationImgaePixels";

interface ICanvasImagePixels {
    src: string;
}

const CanvasImagePixels = ({ src }: ICanvasImagePixels) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        if (!canvasRef.current || !imgRef.current) return;

        new Animation(canvasRef.current, imgRef.current);
    }, [canvasRef, imgRef]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-full h-full "
            ></canvas>
            <img ref={imgRef} src={src} alt="" className="hidden" />
        </>
    );
};

export default CanvasImagePixels;
