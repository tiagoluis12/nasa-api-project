const axios = require('axios');
const { nasaApiKey } = require('../../config/config');

const instance = axios.create({
  baseURL: "https://api.nasa.gov",
  params: { api_key: nasaApiKey },
});

module.exports = {
  getApod: async () => {
    const response = await instance.get("/planetary/apod");
    return response.data;
  },
  getMarsPhotos: async (rover = "curiosity", earth_date = "2020-07-01") => {
    const response = await instance.get(
      `/mars-photos/api/v1/rovers/${rover}/photos`,
      {
        params: { earth_date },
      }
    );
    return response.data;
  },
  getEpic: async () => {
    const response = await instance.get("/EPIC/api/natural");
    return response.data;
  },
};
