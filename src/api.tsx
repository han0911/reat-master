const Url = `https://api.coinpaprika.com/v1`;
export async function Fetchcoin() {
  return fetch(`${Url}/coins`).then((res) => res.json());
}
export async function Fetchcoininfo(coinid: string) {
  return fetch(`${Url}/coins/${coinid}`).then((res) => res.json());
}
export async function FetchcoinTicker(coinid: string) {
  return fetch(`${Url}/tickers/${coinid}`).then((res) => res.json());
}
export async function Fetchcoinhistory(coinid: string) {
  const endData = Math.floor(Date.now() / 1000);
  const startData = endData - 60 * 60 * 24 * 7;
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev/${coinid}?start=${startData}&end=${endData}`).then(
    (res) => res.json()
  );
}
