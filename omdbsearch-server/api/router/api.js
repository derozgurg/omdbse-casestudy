const express = require('express');
const router = express.Router();
const searchController = require('../controller/searchController');
const cacheController = require('../controller/cacheController');

router.get('/search',  searchController.search);
router.get('/clear',  cacheController.clear);

module.exports = router;
