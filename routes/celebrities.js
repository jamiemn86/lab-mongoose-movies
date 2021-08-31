const express = require('express');
const celebritiesRouter = express.Router();
const Celebrity = require('../models/celebrity');

// Handle GET for celebrities pages
celebritiesRouter.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      console.log(celebrities);
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

// celebritiesRouter.get('/celebrities', (req, res, next) => {
//   res.render('index');
// });

module.exports = celebritiesRouter;
