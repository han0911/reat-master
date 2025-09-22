const Url = `https://api.coinpaprika.com/v1/`;
export async function Fetchcoin() {
  return fetch(`${Url}/coins`).then((res) => res.json());
}
export async function Fetchcoininfo(coinid:string) {
  return fetch(`${Url}/coins/${coinid}`).then((res) => res.json());
}
export async function FetchcoinTicker(coinid:string) {
  return fetch(`${Url}/tirckers/${coinid}`).then((res) => res.json());
}
