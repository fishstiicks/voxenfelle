const express = require('express');
const { requireAuth } = require('../../utils/auth'); 
const { check } = require('express-validator');
const { Art } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation'); 

const validateArt = [
  check('url')
    .exists({ checkFalsy: true })
    .withMessage('URL for the art is required.'),
  check('character')
    .exists({ checkFalsy: true })
    .withMessage('Character for the art is required.'),
  check('reference')
    .isBoolean()
    .withMessage('Reference must be a boolean value.'),
  handleValidationErrors
];


const router = express.Router();

// CREATE ART
router.post('/', requireAuth, validateArt, async (req, res) => {
    try {
      const { username } = req.user;
      const { url, character, event, reference } = req.body;
  
      if (!username) {
        return res.status(400).json({ error: 'Username is required' });
      }
  
      const newArt = await Art.create({
        mun: username,
        url,
        character,
        event,
        reference,
      });
  
      return res.status(201).json(newArt);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while creating the art.' });
    }
  });

// GET ALL ART
router.get('/', async (req, res) => {
  try {
    const artPieces = await Art.findAll({
      order: [['id', 'DESC']],
    });
    return res.status(200).json({ arts: artPieces });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to fetch art.' });
  }
});

// GET ART BY ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const artPiece = await Art.findByPk(id);

    if (!artPiece) {
      return res.status(404).json({ error: 'Art not found.' });
    }

    return res.status(200).json(artPiece);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to fetch the art.' });
  }
});

// GET ALL ART BY CHARACTER NAME
router.get('/character/:character', async (req, res) => {
  try {
    const { character } = req.params;

    const artPieces = await Art.findAll({
      where: { character },
      order: [['id', 'DESC']]
    });

    if (artPieces.length === 0) {
      return res.status(404).json({ error: `No art found for character: ${character}.` });
    }

    return res.status(200).json({ Art: artPieces });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to fetch art for the specified character.' });
  }
});

// GET ALL ART BY MUN NAME
router.get('/mun/:mun', async (req, res) => {
  try {
    const { mun } = req.params;

    const artPieces = await Art.findAll({
      where: { mun },
      order: [['id', 'DESC']]
    });

    if (artPieces.length === 0) {
      return res.status(404).json({ error: `No art found for user: ${mun}.` });
    }

    return res.status(200).json({ Art: artPieces });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to fetch art for the specified user.' });
  }
});

// EDIT ART
router.put('/:id', requireAuth, validateArt, async (req, res) => {
    try {
      const { id } = req.params;
      const { url, character, event, reference } = req.body;
      const { username } = req.user;
  
      const art = await Art.findByPk(id);
  
      if (!art) {
        return res.status(404).json({ error: 'Club not found.' });
      }

      if (art.mun !== username && username !== 'Admin') {
        return res.status(403).json({ error: 'You are not authorized to edit this art.' });
      }
  
        if (url) art.url = url;
        if (character) art.character = character;
        if (event) art.event = event;
        if (reference) art.reference = reference;

        await art.save();
  
      return res.status(200).json(art);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while updating the art.' });
    }
  });
  

// DELETE ART
router.delete('/:id', requireAuth, async (req, res) => {
    try {
      const { id } = req.params; 
      const user = req.user; 
  
      const artPiece = await Art.findByPk(id);
  
      if (!artPiece) {
        return res.status(404).json({ error: 'Art not found.' });
      }
  
      if (artPiece.mun !== user.username && username !== 'Admin') {
        return res.status(403).json({ error: 'You are not authorized to delete this art.' });
      }

      await artPiece.destroy();
  
      return res.status(200).json({ message: 'Art deleted successfully.' });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while deleting the art.' });
    }
  });
  

module.exports = router;
