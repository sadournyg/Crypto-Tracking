import React from "react";
import Navbar from "./Components/Navbar";
import CoinTable from "./Components/CoinTable";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="bg-[#2e0a91] text-white">
      {/* <Navbar /> */}
      <CoinTable />
      <Footer />
    </div>
  );
};

export default App;
