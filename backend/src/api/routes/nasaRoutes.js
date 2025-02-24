const express = require('express');
const router = express.Router();

const apodController = require('../controllers/apodController');
const marsPhotosController = require('../controllers/marsPhotosController');
const epicController = require('../controllers/epicController');
const searchController = require('../controllers/searchController');

router.get('/apod', apodController.getApod);
router.get('/mars-photos', marsPhotosController.getMarsPhotos);
router.get('/epic', epicController.getEpic);
router.get('/search', searchController.searchNasaLibrary);

module.exports = router;
