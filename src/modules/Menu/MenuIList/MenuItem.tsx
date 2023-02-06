import React from "react";
import "./menu.css";
import Lottie from "lottie-react";

interface IData {
    imgSrc: string;
    rating: number;
    name: string;
    price: string;
    tagName: string[];
}

interface IMenuItem {
    data: IData;
}

const MenuItem = ({ data }: IMenuItem) => {
    return (
        <div className="item-wrapper bg-white">
            <span className="card-item-left"></span>
            <span className="card-item-mid"></span>
            <span className="card-item-right"></span>
            <div className="item-content  flex flex-col">
                <div className="w-full h-full rounded-[inherit] mb-2">
                    <div className="menu-rating">
                        <div className="menu-rating-item">
                            <span>{data.rating} </span>{" "}
                            <span>
                                <svg
                                    width="18"
                                    height="18"
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
                        </div>
                    </div>
                    <div className="item-img">
                        <img
                            className="w-full h-full object-contain rounded-[inherit]"
                            src={data.imgSrc}
                            alt=""
                        />
                    </div>
                </div>
                <div className="min-h-[108px] p-1 flex flex-col gap-3 justify-start items-start">
                    <div className="flex justify-between items-center text-lg font-medium w-full">
                        <h5>{data.name}</h5>
                        <h5>{data.price}</h5>
                    </div>
                    <div className="min-h-[42px] flex justify-between items-center w-full">
                        <div className="card-item-categries transition-[inherit] flex-1 flex justify-start items-center gap-2">
                            {data.tagName.map((item: string, index: number) => {
                                return (
                                    <span
                                        key={index}
                                        className="px-3  border-2 border-primary rounded-xl transition-[inherit]"
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="card-item-button transition-[inherit] flex justify-center items-center rounded-full w-[42px] h-[42px] bg-primary p-2 text-white cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
