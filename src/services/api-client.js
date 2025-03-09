import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a6c80cd28c4452c8e388d0fba2d6fe6",
  },
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
