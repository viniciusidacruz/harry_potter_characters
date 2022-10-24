import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://hp-api.herokuapp.com/api',
});
