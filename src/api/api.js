import md5 from "crypto-js/md5";

export const PUBLIC_KEY_MARVEL = "91bb24a91476c1b87d439fcaf4e8573a";
export const PRIVATE_KEY_MARVEL = "1a5bc758b308b60cdcea9486976fc15084f107a6";
const LIMIT = 50;
const URL = "https://gateway.marvel.com:443/v1/public/characters";

export const getHash = ts =>
  md5(ts + PRIVATE_KEY_MARVEL + PUBLIC_KEY_MARVEL).toString();

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const getMarvelComics = () => {
  const ts = new Date().getTime();
  return fetch(
    `${URL}?apikey=${PUBLIC_KEY_MARVEL}&ts=${ts}&hash=${getHash(ts)}&limit=${LIMIT}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(res => res.data.results);
};

const getIndividualCharacter = (id) => {
    const ts = new Date().getTime();
    return fetch(
      `${URL}/${id}?apikey=${PUBLIC_KEY_MARVEL}&ts=${ts}&hash=${getHash(ts)}&limit=${LIMIT}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(checkStatus)
      .then(parseJSON)
      .then(res => res.data.results);
  };

export default { getMarvelComics, getIndividualCharacter };