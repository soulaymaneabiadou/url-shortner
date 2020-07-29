const router = require('express').Router();
const { shortenUrl } = require('../controllers/url');

router.post('/shorten', shortenUrl);

module.exports = router;
