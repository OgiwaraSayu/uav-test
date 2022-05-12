import axios from "axios";

const baseURL = "http://localhost:8686"

export function getData(url) {
    const instsall = axios.create({
        baseURL,
        // timeout: 2000
    });
    return instsall(url);
}