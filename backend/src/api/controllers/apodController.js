const nasaService = require('../../domain/services/nasaService');

module.exports = {
  getApod: async (req, res, next) => {
    try {
      const data = await nasaService.fetchApod();
      res.json(data);
    } catch (error) {
      next(error);
    }
  },
};
