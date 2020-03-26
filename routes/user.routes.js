const express = require('express');
const router = express.Router();
const { isLogged } = require('../middleware/auth');

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', { userName: req.user.displayName, avatar: req.user.photos[0].value });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/user/profile/', isLogged, (req, res) => {
  res.render('userProfile');
});

router.get('/user/profile/settings', isLogged, (req, res) => {
  res.render('userSettings');
});


module.exports = router;