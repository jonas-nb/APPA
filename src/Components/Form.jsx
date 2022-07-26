import React from "react";
import { useState } from "react";
import btnIcon from "../assets/images/icon-arrow.svg";
import "./animateValid.css";
import { IoAlertCircleSharp } from "react-icons/io5";
const Form = () => {
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState();

  const validaEmail = (event) => {
    if (email === "") {
      event.preventDefault();
      setEmailState(false);
    } else {
      setEmailState(true);
    }
  };

  const bgStyle = {
    backgroundImage: "linear-gradient(135deg, #ffffff, #fff4f4)",
  };
  const bgButton = {
    backgroundImage: "linear-gradient(135deg, #F7BEBE, #ED8B8B)",
  };

  return (
    <div className="flex flex-col items-center h-1/6">
      <form
        style={bgStyle}
        className={`${
          emailState === false ? "outline outline-red-400" : ""
        } m-auto mt-3 border-2 border-[#CE9696]/30 w-12/12 h-12 rounded-3xl flex justify-between items-center`}
      >
        <input
          type="email"
          placeholder="Email Address"
          name=""
          id=""
          className={`outline-none h-full rounded-3xl p-5 text-[#403939] font-['Josefin_Sans']`}
          style={bgStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="w-28 h-full  flex justify-between items-center">
          <IoAlertCircleSharp
            className={`${
              emailState === false ? "visible " : "invisible"
            } text-2xl text-red-400`}
          />
          <button
            onClick={validaEmail}
            style={bgButton}
            className="w-16 h-full rounded-3xl flex justify-center items-center drop-shadow-xl shadow-md shadow-[#F7BEBE] transition ease-in-out delay-150 hover:scale-125"
          >
            <img src={btnIcon} alt="ícone de envio de email" />
          </button>
        </div>
      </form>

      <div
        className={`${
          emailState === false
            ? "visible shake-horizontal transition-all duration-1000 ease-linear  "
            : "invisible"
        } text-[#a91212] font-semibold pt-2`}
      >
        Please provide a valid email!
      </div>
    </div>
  );
};

export default Form;
