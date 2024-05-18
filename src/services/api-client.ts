import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1d2a1440277c41c0bd1841d9a58b8bee",
  },
});
