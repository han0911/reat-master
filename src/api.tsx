const BASE_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export async function Fetchcoin() {
  return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) =>
    res.json()
  );
}

export async function Fetchcoininfo(coinid: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`).then((res) =>
    res.json()
  );
}

export async function FetchcoinTicker(coinid: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinid}`).then((res) =>
    res.json()
  );
}

export async function fetchCoinHistory(coinid: string) {
  const response = await fetch(`${BASE_URL}?coinId=${coinid}`);
  const data = await response.json();
  console.log(data); // 이제 실제 데이터를 확인할 수 있습니다.
  return data;
}
