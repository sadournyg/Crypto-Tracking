import React from "react";
import bgImage from "../assets/crypt.jpg";
import Navbar from "./Navbar";

const CoinTable = () => {
  return (
    <div>
      <div className="pb-[3rem]">
        {/* Hero Section */}
        <div
          className="relative h-[110vh] w-full bg-cover bg-center bg-no-repeat rounded-b-[150px] "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <Navbar />
          <div className="max-w-[900px] ml-[-50px] mt-[8rem] flex flex-col items-center text-left gap-8">
            <h1 className="text-[60px] ml-[-85px] font-bold leading-tight">
              Secure, Smart, and <br /> Easy Crypto Checking
            </h1>
            <p className="w-[75%] text-[#e3e3e3] text-[18px] leading-[1.5]">
              Stay in control of your digital assets with our powerful crypto
              checking plateform. Get real-time updates, track your portfolio,
              and verify transactions with ease.
            </p>
            <form className="relative z-10 flex items-center w-[60%] bg-white rounded-md p-2 text-[20px] ml-[-130px] gap-3 ">
              <input
                type="text"
                placeholder="Search crypto"
                className="flex-1 text-[16px] outline-none border-none pl-2 text-black"
              />
              <button
                type="submit"
                className="bg-[#4727ff] text-white text-[16px] px-6 py-2 rounded-md cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {/* Coin Table */}
      </div>
    </div>
  );
};

export default CoinTable;
