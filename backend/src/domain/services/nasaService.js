const nasaApi = require('../../infra/external/nasaApi');


  const fetchApod=  async () => {
    return await nasaApi.getApod();
  };

  const fetchMarsPhotos = async ({ rover, earth_date }) => {
    return await nasaApi.getMarsPhotos(rover, earth_date);
  };

  const fetchEpic = async () => {
    return await nasaApi.getEpic();
  };


module.exports = {
    fetchApod,
    fetchMarsPhotos,
    fetchEpic,
  };