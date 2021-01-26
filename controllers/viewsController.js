function viewsController() {
    function getLandingPage(req, res) {
        res.render('landingPage', {});
    };

    return {
        getLandingPage,
    };
}

module.exports = viewsController;
