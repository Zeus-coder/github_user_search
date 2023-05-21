import axios from "axios";

export const getUsers = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
};