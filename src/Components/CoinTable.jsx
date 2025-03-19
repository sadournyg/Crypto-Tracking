import React, { useContext, useEffect, useState } from "react";
import bgImage from "../assets/crypt.jpg";
import { CoinContext } from "../Context/CoinContext";
import Navbar from "./Navbar";

const CoinTable = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full bg-cover bg-center sm:bg-right-top bg-no-repeat rounded-b-3xl sm:rounded-b-2xl"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Navbar />
        <div className="max-w-5xl mx-auto mt-38 sm:mt-36 md:mt-40  text-blue-100 font-bold  flex flex-col lg:items-start lg:text-left items-center text-center gap-10 px-4 lg:px-0 lg:ml-[50px] lg:mt-[250px]  ">
          <h1 className="text-6xl lg:text-7xl md:text-5xl sm:text-4xl  font-bold leading-tight">
            Secure, Smart, and <br /> Easy Crypto Checking
          </h1>
          <p className="w-full md:w-3/4 text-white/90 text-xl md:text-2xl leading-relaxed">
            Stay in control of your digital assets with our powerful crypto
            checking platform. Get real-time updates, track your portfolio, and
            verify transactions with ease.
          </p>
          <form
            onSubmit={searchHandler}
            className="relative z-10 flex items-center w-[92%] sm:w-4/5 md:w-2/3 lg:w-2/3 bg-white rounded-lg p-2 text-lg gap-2 shadow-lg mt-8 sm:mt-10 mb-15 sm:mb-0"
          >
            <input
              value={input}
              onChange={inputHandler}
              type="text"
              placeholder="Search crypto"
              className="flex-1 text-lg outline-none border-none pl-3 text-black py-3"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white text-lg w-[100px] px-4 py-3 rounded-md cursor-pointer hover:bg-indigo-700 transition ml-[-8px]"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Coin Table */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        {/* Table Header (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-6 p-4 items-center border-b border-gray-700">
          <p>Rank</p>
          <p>Coins</p>
          <p>Symbol</p>
          <p>Current Price</p>
          <p className="text-center">Price Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {/* Table Content */}
        {displayCoin.slice(0, 12).map((item, index) => (
          <div
            key={index}
            className="p-4 border-b border-gray-700 last:border-none flex flex-col md:grid md:grid-cols-6 items-center gap-2 md:gap-0"
          >
            <p className="text-gray-400">#{item.market_cap_rank}</p>
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-10" />
              <p className="font-semibold">{item.name}</p>
            </div>
            <p className="uppercase">{item.symbol}</p>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={`text-center ${
                item.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>
            <p className="text-right">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinTable;
