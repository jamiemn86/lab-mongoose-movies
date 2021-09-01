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

// celebrities create GET route
celebritiesRouter.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/create');
});

// celebrities POST route
celebritiesRouter.post('/celebrities', (req, res, next) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchphrase;
  const celebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });

  celebrity
    .save()
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next('/celebrities/create');
    });
});

// Handle GET for /celebrities/:id
celebritiesRouter.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Celebrity.findById(id)
    .then((celebrities) => {
      res.render('celebrities/show', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

celebritiesRouter.post('/celebrities/:id/delete', (request, response, next) => {
  const id = request.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      response.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// celebritiesRouter.get('/celebrities', (req, res, next) => {
//   res.render('index');
// });

module.exports = celebritiesRouter;
