import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-2e70a.firebaseio.com/",
});

export default instance;
