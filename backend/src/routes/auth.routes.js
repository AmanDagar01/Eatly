const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/auth.controller');


const router = express.Router();

// user auth
router.post('/user/register', registerUser)
router.post('/user/login', loginUser)
router.get('/user/logout', logoutUser)

module.exports = router;
