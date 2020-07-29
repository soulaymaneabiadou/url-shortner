const router = require('express').Router();
const { loadUrl } = require('../controllers/index');

router.get('/:code', loadUrl);

module.exports = router;
