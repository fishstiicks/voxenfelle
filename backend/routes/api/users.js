const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const validateSignup = [
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

const router = express.Router();

router.post(
    '/',
    async (req, res) => {
      const { password, username } = req.body;
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({ username, hashedPassword });
  
      const safeUser = {
        id: user.id,
        username: user.username,
      };
  
      await setTokenCookie(res, safeUser);
  
      return res.json({
        user: safeUser
      });
    }
  );


  // Sign up
router.post(
    '/',
    validateSignup,
    async (req, res) => {
      const { password, username } = req.body;
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({ username, hashedPassword });
  
      const safeUser = {
        id: user.id,
        username: user.username,
      };
  
      await setTokenCookie(res, safeUser);
  
      return res.json({
        user: safeUser
      });
    }
  );

// GET ALL USERS
  router.get('/', async (req, res) => {
      try {
        const users = await User.findAll();
        return res.status(200).json({ Users: users });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Unable to fetch users.' });
      }
    });


  module.exports = router;