import React from "react";
import room from "../assets/img/bedroom-3.png";
import bath from "../assets/img/bath.png";
import stair from "../assets/img/stair.png";
import group from "../assets/img/Group.png";
import shape from "../assets/img/Shape.png";
import rachael from "../assets/img/rachael.png";
import call from "../assets/img/call.png";

const Ready = () => {
    return (
        <div className="scroll-mt-20 mx-10 mt-10">
            <div className="ml-auto mr-auto mb-8">
                {" "}
                <p className=" text-amber-200">Ready to Sell!</p>
                <h1 className=" text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold mb-5">
                    Let’s tour and see our hotel!
                </h1>
            </div>
            <div className="grid sm:flex justify-between">
                <div className="mx-5">
                    <div>
                    <p className="w-[15rem]">
                    {" "}
                    Rooms and apartments recommended by our partners that have been
                    curated to become the home of your dreams!
                </p>
                        <p className="font-semibold">House Detail</p>
                        <ul className="flex flex-wrap gap- w-[15rem]">
                            <li className="pt-4">
                                <img src={shape} alt="" />
                                <p>4 Bedrooms</p>
                            </li>
                            <li className="ml-14">
                                <img src={bath} alt="" />
                                <p>2 Bathrooms</p>
                            </li>
                            <li>
                                <img src={group} alt="" />
                                <p>1 Carport</p>
                            </li>
                            <li className="ml-20">
                                <img src={stair} alt="" />
                                <p>2 Floors</p>
                            </li>
                        </ul>{" "}

                    </div>
                    <div className="grid sm:flex relative text-[12px] mt-3">
                        <img src={rachael} alt="" className="w-[5rem]" />
                        <div className="mt-5 w-52">
                            <p>Rachael Okorie</p>
                            <p>Managing Director</p>
                        </div>

                        <div className="mt-3 ">
                            <a
                                href="#"
                                className=" bg-amber-200 w-[8rem] rounded-full text-center flex  gap-3 p-3"
                            >
                                <img src={call} alt="" className="w-[20px] h-[20px] mt-0.5" />
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    {" "}
                    <img src={room} alt="" className="w-3/4" />
                </div>
            </div>
        </div>
    );
};

export default Ready;
