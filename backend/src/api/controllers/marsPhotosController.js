const nasaService = require('../../domain/services/nasaService');

module.exports = {
  getMarsPhotos: async (req, res, next) => {
    try {
      const { rover = 'curiosity', earth_date = '2020-07-01' } = req.query;
      
      const data = await nasaService.fetchMarsPhotos({ rover, earth_date });
      res.json(data);
    } catch (error) {
      next(error);
    }
  },
};