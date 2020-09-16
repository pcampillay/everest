var express = require('express');
var router = express.Router();

var captcha = require('../controllers/captcha');

router.get('/:id', captcha.GeneratorCaptcha);
router.post('/', captcha.ValidCaptcha);

module.exports = router;