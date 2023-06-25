import useFetch from "./../hooks/useFetch";

export async function GetTrendCoins(navigation, { coinNumber }) {
  const apiCall = await useFetch(navigation).get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinNumber}&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d`
  );

  return apiCall;
}
