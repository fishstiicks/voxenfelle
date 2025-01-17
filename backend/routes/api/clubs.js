const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { Club, Character, Membership } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation'); 


const validateClub = [
  check('name')
    .optional() 
    .isString()
    .withMessage('Club name must be a string.')
    .isLength({ max: 255 })
    .withMessage('Club name must be at most 255 characters long.'),
  check('description')
    .optional() 
    .isString()
    .withMessage('Description must be a string.')
    .isLength({ max: 1000 })
    .withMessage('Description must be at most 1000 characters long.'),
  handleValidationErrors
];

const validateMembership = [
    check('club')
      .exists({ checkFalsy: true })
      .withMessage('Club is required'),
    check('character')
      .exists({ checkFalsy: true })
      .withMessage('Character is required'),
    handleValidationErrors
  ];

const router = express.Router();

// CREATE CLUB
router.post('/', requireAuth, validateClub, async (req, res) => {
  try {
    const user = req.user; 
    const { name, description } = req.body;

    const newClub = await Club.create({
      name,
      description,
      creator: user.username 
    });

    return res.status(201).json(newClub); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while creating the club.' });
  }
});

// GET ALL CLUBS
router.get('/', async (req, res) => {
    try {
      const clubs = await Club.findAll();
  
      return res.status(200).json({ clubs: clubs });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch clubs.' });
    }
  });

  // GET CLUB BY ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const club = await Club.findOne({ where: { id } });
      
      if (!club) {
        return res.status(404).json({ error: 'Club not found.' });
      }
  
      return res.status(200).json({ club: club });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch the club.' });
    }
  });

// EDIT CLUB
router.put('/:id', requireAuth, validateClub, async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.user;
      const { name, description } = req.body; 
  
      const club = await Club.findByPk(id);
  
      if (!club) {
        return res.status(404).json({ error: 'Club not found.' });
      }

      if (club.creator !== user.username) {
      return res.status(403).json({ error: 'You are not authorized to edit this club.' });
      }
      
      if (name) club.name = name;
      if (description) club.description = description;

      await club.save();
  
      return res.status(200).json(club);
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while updating the club.' });
    }
  });


// DELETE CLUB
router.delete('/:id', requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.user;
  
      const club = await Club.findByPk(id);
  
      if (!club) {
        return res.status(404).json({ error: 'Club not found.' });
      }
  
      if (club.creator !== user.username) {
        return res.status(403).json({ error: 'You are not authorized to delete this club.' });
      }
  
      await club.destroy();
  
      return res.status(200).json({ message: 'Club deleted successfully.' });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while deleting the club.' });
    }
  });

// CREATE MEMBERSHIP FOR CLUB
router.post('/:clubName/:characterName', requireAuth, validateMembership, async (req, res) => {
    try {
      const { clubName, characterName } = req.params;
  
      const club = await Club.findOne({ where: { name: clubName } });
      const character = await Character.findOne({ where: { name: characterName } });
  
      if (!club) {
        return res.status(404).json({ message: `Club ${clubName} not found.` });
      }
  
      if (!character) {
        return res.status(404).json({ message: `Character ${characterName} not found.` });
      }
  
      const existingMembership = await Membership.findOne({
        where: { club: clubName, character: characterName }
      });
  
      if (existingMembership) {
        return res.status(409).json({ message: 'Membership already exists for this club and character.' });
      }
  
      const newMembership = await Membership.create({
        club: clubName,
        character: characterName
      });
  
      return res.status(201).json(newMembership);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while creating the membership.' });
    }
  });

// GET ALL MEMBERSHIPS
router.get('/memberships', async (req, res) => {
    try {
      const memberships = await Membership.findAll();
      return res.status(200).json({ Memberships: memberships });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch memberships.' });
    }
  });

  router.get('/:clubName/members', async (req, res) => {
    try {
      const { clubName } = req.params;
      console.log("Fetching memberships for club: ", clubName);
  
      const memberships = await Membership.findAll({
        where: { club: clubName },
        include: [{
          model: Character,
          attributes: ['name', 'picrew']
        }]
      });
  
      console.log("Found memberships: ", memberships);
  
      if (memberships.length === 0) {
        return res.status(404).json({ error: `No memberships found for the club: ${clubName}` });
      }
  
      const membersWithDetails = memberships.map(membership => ({
        id: membership.id,
        character: membership.Character
      }));
  
      return res.status(200).json({ Memberships: membersWithDetails });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch memberships.' });
    }
  });
  

  router.delete('/:clubName/:characterName', requireAuth, async (req, res) => {
  try {
    const { clubName, characterName } = req.params;
    const { user } = req;

    const membership = await Membership.findOne({
      where: { club: clubName, character: characterName }
    });

    if (!membership) {
      return res.status(404).json({ message: `Membership not found for club: ${clubName} and character: ${characterName}.` });
    }

    if (user.username !== membership.mun) {
      return res.status(403).json({ message: 'You are not authorized to delete this membership.' });
    }

    await membership.destroy();
    return res.status(200).json({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while deleting the membership.' });
  }
});


// DELETE A MEMBERSHIP
router.delete('/:clubName/:characterName', requireAuth, async (req, res) => {
    try {
      const { clubName, characterName } = req.params;
      const { user } = req;
  
      const membership = await Membership.findOne({
        where: { club: clubName, character: characterName }
      });
  
      if (!membership) {
        return res.status(404).json({ message: `Membership not found for club: ${clubName} and character: ${characterName}.` });
      }
  
      if (user.username !== membership.mun) {
        return res.status(403).json({ message: 'You are not authorized to delete this membership.' });
      }
  
      await membership.destroy();
      return res.status(200).json({ message: 'Successfully deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while deleting the membership.' });
    }
  });

module.exports = router;
