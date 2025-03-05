const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get('/professional', lesson1Controller.professional);

module.exports = routes;