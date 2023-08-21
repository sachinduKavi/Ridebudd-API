const express = require('express');
const router = express.Router();

const { getBanners } = require('../controllers/banners');

router.get("/getBanners", getBanners);


module.exports = router;