const searchService = require('../../domain/services/searchService');

exports.searchNasaLibrary = async (req, res, next) => {
  try {
    const { q, media_type, sort } = req.query;
    // Example: q="Orion", media_type="image,video,audio", sort="date" or "title"
    const data = await searchService.searchNasaLibrary(q, media_type, sort);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
