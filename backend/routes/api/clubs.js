const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { Club, Character, Membership } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation'); 


const validateClub = [
  check('name')
    .optional() 
    .isString()
    .withMessage('Club name must be a string.')
    .isLength({ max: 50 })
    .withMessage('Club name max 50.'),
  check('description')
    .optional() 
    .isLength({ max: 80 })
    .withMessage('Description must be at most 80 characters long.'),
  handleValidationErrors
];

const validateMembership = [
    check('clubName')
    .exists({ checkFalsy: true })
    .withMessage('Club is required'),
  check('characterName')
    .exists({ checkFalsy: true })
    .withMessage('Character is required'),
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
      const clubs = await Club.findAll({
        order: [['name', 'ASC']],
      });

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

// GET ALL MEMBERSHIPS BY MUN NAME
router.get('/users/:name/memberships', async (req, res) => {
    try {
      const { name } = req.params;
      
      const characters = await Character.findAll({
        where: { mun: name },
        attributes: ['name'],
      });
  
      if (characters.length === 0) {
        return res.status(404).json({ error: `No characters.` });
      }
  
      const characterNames = characters.map(character => character.name);
  
      const memberships = await Membership.findAll({
        where: {
          character: characterNames
        },
        include: [
          {
            model: Character,
            where: {
              name: characterNames
            },
            attributes: ['picrew', 'name'],
            required: true,
          },
        ],
        order: [[Character, 'name', 'ASC']]
      });
  
      if (memberships.length === 0) {
        return res.status(404).json({ error: `No memberships found.` });
      }
  
      const membershipsWithDetails = memberships.map(membership => ({
        id: membership.id,
        club: membership.club,
        character: membership.Character
      }));
  
      return res.status(200).json({ memberships: membershipsWithDetails });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch memberships.' });
    }
  });
  
  

// GET ALL MEMBERS IN A CLUB
router.get('/:clubName/members', async (req, res) => {
    try {
        const { clubName } = req.params;

        const memberships = await Membership.findAll({
        where: { club: clubName },
        include: [{
            model: Character,
            attributes: ['name', 'picrew']
        }],
        });

        if (memberships.length === 0) {
        return res.status(404).json({ error: `No memberships found for the club: ${clubName}` });
        }

        const membersWithDetails = memberships.map(membership => ({
        id: membership.id,
        character: membership.Character
        }));

        return res.status(200).json({ Memberships: membersWithDetails });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to fetch memberships.' });
    }
});

// GET ALL CLUBS FOR A CHARACTER
router.get('/:name/clubs', async (req, res) => {
    try {
        const { name } = req.params;

        const memberships = await Membership.findAll({
        where: { character: name }
        });

        if (memberships.length === 0) {
        return res.status(404).json({ error: `No memberships found for this character.` });
        }

        return res.status(200).json({ Memberships: memberships });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Unable to fetch memberships.' });
    }
});

// DELETE A MEMBERSHIP
router.delete('/memberships/:id', requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { user } = req;
    
      const membership = await Membership.findByPk(id, {
        include: { model: Character, attributes: ['mun'] }
      });
  
      if (!membership) {
        return res.status(404).json({ message: "Membership not found" });
      }
  
      if (user.username !== membership.Character.mun) {
        return res.status(403).json({ message: "You are not authorized to delete this membership" });
      }
  
      await membership.destroy();
  
      return res.status(200).json({ message: "Successfully deleted membership" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong while deleting the membership" });
    }
  });
  

module.exports = router;
