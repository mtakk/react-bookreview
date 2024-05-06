import axios from "axios";

let instance = axios.create({
    baseURL: "https://railway.bookreview.techtrain.dev",
});

export default instance;
export { instance as axios }