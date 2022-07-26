import React from "react";
import Form from "./Form";
import ImageContainer from "./ImageContainer";
import Logo from "./Logo";
import Texts from "./Texts";
const Container = () => {
  return (
    <div className="w-full sm:grid sm:grid-rows-1 sm:grid-cols-2 md:grid-rows-none md:grid-cols-none lg:grid-rows-1 lg:grid-cols-2 ">
      <div className="sm:justify-self-center sm:p-3 lg:pt-10">
        <Logo />
      </div>
      <div className="sm:row-span-2 sm:self-center lg:flex lg:justify-end lg:items-center lg:h-screen">
        <ImageContainer />
      </div>
      <div className="sm:h-full sm:mb-28  lg:place-self-center lg:relative lg:left-0 xl:left-24">
        <Texts />
        <Form />
      </div>
    </div>
  );
};

export default Container;
