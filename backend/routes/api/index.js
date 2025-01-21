// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const charactersRouter = require('./characters'); 
const clubsRouter = require('./clubs.js')
const artsRouter = require('./arts.js')
const storiesRouter = require ('./story.js')

const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/characters', charactersRouter);
router.use('/clubs', clubsRouter);
router.use('/arts', artsRouter);
router.use('/story', storiesRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;