import React from "react";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="items-start w-60 h-10 m-5 sm:m-0 xl:mr-72">
      <img src={logo} alt="" className="w-32" />
    </div>
  );
};

export default Logo;
