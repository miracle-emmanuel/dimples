import React from "react";
import logo from "../assets/img/logosvg.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="grid justify-between p-10 sm:flex mt-1 gap-0">
        <div>
          <img src={logo} alt="" />
          <p className="w-[15rem]">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex gap-5">
            <a href="#">
              {" "}
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              {" "}
              <img src={instagram} alt="" className="mt-1.5" />
            </a>
            <a href="#">
              {" "}
              <img src={twitter} alt="" className="mt-1.5" />
            </a>
          </div>
        </div>
        <div className="sm:flex grid gap-5">
          <div className="grid">
            <h1 className="font-semibold my-3">Services</h1>
            <a href="#">Dimple 44</a>
            <a href="#">Dimple Apartment</a>
            <a href="#">Dimple Furnitures</a>
          </div>
          <div className="grid ">
            <h1 className="font-semibold my-3">Article</h1>
            <a href="#">New Article</a>
            <a href="#">Popular Article</a>
            <a href="#">Most Read</a>
          </div>
          <div className="grid ">
            <h1 className="font-semibold my-3">Contact</h1>
            <a href="#">Dimple Towers</a>
            <a href="#">Behind New World Academy, <br />Ojo Barracks, Lagos state.</a>
            <a href="#">+234 902 226 0564</a>
          </div>
          <div className="grid">
            <h1 className="font-semibold my-3 w-1/4">Contact</h1>
            <a href="#">Dimple Apartments</a>
            <a href="#">Lekki, Victoria Island, Lagos state.</a>
            <a href="#">+234 902 226 0564</a>
          </div>
        </div>
      </div>
      <div className=" grid justify-between sm:mx-40 sm:flex text-[10px]">
        <div>
          <p>© Neroks Integrated Services | All Right Reserved</p>
        </div>
        <div className="grid justify-between gap-10 sm:flex dark:text-white">
          <a href="#">Terms and Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="https://neroks-integrated-services-snowy.vercel.app/">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
