const express = require('express');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');
const authValidation = require('../validations/auth.validation');
const userValidation = require('../validations/user.validation');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', validate(authValidation.register), authController.register);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/logout', validate(authValidation.logout), authController.logout);

router
  .route('/profile')
  .get(auth('getUsers'), userController.getUserProfile);

module.exports = router;