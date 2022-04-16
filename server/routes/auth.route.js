const express = require('express');
const authController = require('../controlers/auth.controler');
const router = express.Router();

router.post('/register', authController.register);
router.post('/signin', authController.signin);
router.get('/isauth', authController.isauth);


module.exports = router;