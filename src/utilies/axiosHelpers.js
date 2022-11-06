import axios from "axios";

export const fetchData = (str) => {
  const apiEp = `https://www.omdbapi.com/?apikey=82d5b008&t=${str}`;
  const response = axios(apiEp);

  return response;
};
