const express = require('express');
const authRoute = require('./auth.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/api',
    route: authRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
