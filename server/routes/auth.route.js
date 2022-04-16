const express = require('express');
const authController = require('../controlers/auth.controler');
const router = express.Router();

router.get('/hello', authController.hello);

module.exports = router;