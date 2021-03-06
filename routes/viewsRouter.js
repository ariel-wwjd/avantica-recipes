const express = require('express');
const viewsController = require('../controllers/viewsController');

function routes() {
    const router = express.Router();
    const controller = viewsController();

    router.route('/')
        .get(controller.getLandingPage);

    return router;
};

module.exports = routes;
