const routes = require('express').Router()
const lesson1Controller = require('../controllers/lesson1')

routes.get("/", lesson1Controller.greetMe);
routes.get("/noon", lesson1Controller.greetNoon);

module.exports = routes