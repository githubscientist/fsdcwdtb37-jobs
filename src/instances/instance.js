import axios from "axios";

const baseURL = 'https://694e9adbb5bc648a93c0d760.mockapi.io';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default instance;