import React from "react";
import img from "../assets/images/hero-mobile.jpg";
import imgDesktop from "../assets/images/hero-desktop.jpg";
const ImageContainer = () => {
  return (
    <div>
      <img className="object-cover w-full h-52 sm:hidden  " src={img} alt="" />
      <img
        className="hidden sm:block md:w-6/12 lg:w-full md:m-auto xl:w-[30rem]"
        src={imgDesktop}
        alt=""
      />
    </div>
  );
};

export default ImageContainer;
