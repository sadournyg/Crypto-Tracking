import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_CG_API_KEY,
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();

      setAllCoin(data);
      console.log(data);
    } catch (error) {
      console.log("error fetching coin data");
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  return (
    <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
