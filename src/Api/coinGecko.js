
const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-6d5SbQBzob61AuUN7Bwdqjdv";

export const fetchCryptos = async() =>{
    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&x_cg_demo_api_key=${API_KEY}`)

    if(!response.ok){
        throw new Error("failed to fetch Crypto Coins")
    }

    return response.json();
}


export const fetchCoinData = async (id) => {
  const response = await fetch(
    `${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coin data");
  }
  return response.json();
};


export const fetchChartData = async (id) => {
  const response = await fetch(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return response.json();
};