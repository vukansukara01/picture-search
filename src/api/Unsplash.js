import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MdKjFm68Ru0j2PMgIU-8888c-7HcELWHqoKvqfMSZwk",
  },
});
