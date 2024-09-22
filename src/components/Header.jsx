import React from "react";
import trip from "../assets/img/trip.png";
import tiket from "../assets/img/tiket.png";
import airbnb from "../assets/img/airbnb.png";
import traveloka from "../assets/img/traveloka.png";
import book from "../assets/img/Vector.png"
import headerimg from "../assets/img/headerimg.png"

const Header = () => {
  return (
    <div className=" grid sm:flex gap-5 bg-black text-white pb-10">
      <div className="grid gap-5"> 
        <h1 className=" text-center  align-middle font-bold w-3/4  ml-auto mr-auto text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
          Find the place to live <span className="text-amber-200">your dreams</span> easily here
        </h1>
        <p className="text-[15px] text-center">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <div className="ml-auto mr-auto flex justify-between h-fit w-fit gap-5 border border-s-black-200 rounded-full p-2">
          <div className="flex gap-1">
          {" "}
          <img src={book} alt="" className="w-[20px] h-[20px]"/>
          <p className="text-[15px]">Reserve your room</p>
          </div>
          <a href="#" className=" bg-amber-200 w-20 h-fit rounded-full text-center">Book</a>
        </div>
        <div className="ml-auto mr-auto">
          {" "}
          <p className=" text-center">Our partners</p>
          <div className="grid gap-3 sm:flex grid-cols-2">
            <img src={trip} alt="" srcset="" />
            <img src={airbnb} alt="" srcset="" />
            <img src={traveloka} alt="" srcset="" />
            <img src={tiket} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div>
        <img src={headerimg} alt="" srcset="" className=" rounded-t-full" />
      </div>
    </div>
  );
};

export default Header;
