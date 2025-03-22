import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll(config) {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  }

  get(id) {
    return axiosInstance.get(`${this.endpoint}/${id}`).then((res) => res.data);
  }
}

export default APIClient;
