import React from "react";
const Texts = () => {
  return (
    <div className="m-auto mt-5">
      <article>
        <div className=" flex items-center flex-col font-['Josefin_Sans'] text-4xl leading-8 ">
          <span className="text-[#CE9696] font-light xl:text-6xl">WE'RE</span>
          <span className="text-[#403939] font-semibold xl:text-6xl">
            COMING
          </span>
          <span className="text-[#403939] font-semibold xl:text-6xl">SOON</span>
        </div>
        <div className=" m-auto mt-4  w-11/12">
          <p className="text-center text-[#CE9696] font-['Josefin_Sans'] font-normal xl:text-2xl">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and out launch deals.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Texts;
