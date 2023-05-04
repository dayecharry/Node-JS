const express = require('express');

const {
  login,
  register,
  checkSession,
  adminRole,
  logoutUser,
} = require('../controllers/user.controller');

const { isAuth, isAdmin, logout } = require('../../middlewares/auth');
const router = express.Router();

router.post('/login', login);

router.post('/register', register);

router.post('/checkSession', [isAuth], checkSession);

router.post('/admin', [isAdmin], adminRole);

router.get('/logout', [logout], logoutUser);

module.exports = router;
