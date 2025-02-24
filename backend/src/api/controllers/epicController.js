const nasaService = require("../../domain/services/nasaService");

module.exports = {
  getEpic: async (req, res, next) => {
    try {
      const data = await nasaService.fetchEpic();
      res.json(data);
    } catch (error) {
      next(error);
    }
  },
};