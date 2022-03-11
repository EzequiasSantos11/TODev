import axios from "axios";

const api = axios.create({
  baseURL: "https://crudapie.herokuapp.com/"
})

export default api;