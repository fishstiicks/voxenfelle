const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { Character, Membership, Relationship } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation'); 

const validateCharacter = [
  check('mun')
    .exists({ checkFalsy: true })
    .withMessage('Username (mun) is required.'),
  check('state')
    .isIn(['NPC', 'PC'])
    .withMessage('State must be either "NPC" or "PC".'),
  check('picrew')
    .exists({ checkFalsy: true })
    .withMessage('Picrew is required.'),
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Character name is required.'),
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Full name is required.'),
  check('pronouns')
    .exists({ checkFalsy: true })
    .withMessage('Pronouns are required.'),
  check('height')
    .isInt({ min: 1 })
    .withMessage('Height must be a positive integer.'),
  check('lineage')
    .isIn(['Civilian', 'Noble'])
    .withMessage('Lineage must be either "Civilian" or "Noble".'),
  check('source')
    .isIn(['Aura', 'Void', 'None'])
    .withMessage('Source must be either "Aura", "Void", or "None".'),
  check('weapon')
    .exists({ checkFalsy: true })
    .withMessage('Weapon is required.'),
  check('power')
    .exists({ checkFalsy: true })
    .withMessage('Power is required.'),
  check('reputation')
    .exists({ checkFalsy: true })
    .withMessage('Reputation is required.'),
  check('class')
    .exists({ checkFalsy: true })
    .withMessage('Class is required.'),
  check('dorm')
    .exists({ checkFalsy: true })
    .withMessage('Dorm is required.'),
  check('str').isInt().withMessage('Strength must be an integer.'),
  check('dex').isInt().withMessage('Dexterity must be an integer.'),
  check('con').isInt().withMessage('Constitution must be an integer.'),
  check('cha').isInt().withMessage('Charisma must be an integer.'),
  check('int').isInt().withMessage('Intelligence must be an integer.'),
  check('mag').isInt().withMessage('Magic must be an integer.'),
  check('soulbond')
    .isBoolean()
    .withMessage('Soulbond must be a boolean value.'),
  check('souldrop')
    .isBoolean()
    .withMessage('Souldrop must be a boolean value.'),
  handleValidationErrors
];

const validateRelationship = [
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Description field is required.'),
    handleValidationErrors,
  ];

const router = express.Router();

// CREATE CHARACTER
router.post('/', validateCharacter, async (req, res) => {
  try {
    const user = req.user;
    const {
      mun, state, picrew, name, fullName, pronouns, height, lineage,
      source, hexcode, weapon, power, reputation, class: characterClass, dorm,
      str, dex, con, cha, int, mag, soulbond, souldrop
    } = req.body;

    const newCharacter = await Character.create({
      mun, state, picrew, name, fullName, pronouns, height, lineage, source,
      hexcode, weapon, power, reputation, class: characterClass, dorm,
      str, dex, con, cha, int, mag, soulbond, souldrop
    });

    return res.status(201).json(newCharacter);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while creating the character.' });
  }
});

// GET ALL CHARACTERS
router.get('/', async (req, res) => {
    try {
      const characters = await Character.findAll({
        order: [['name', 'ASC']],
      });
      return res.status(200).json({ characters: characters });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch characters.' });
    }
  });

// GET ALL CHARACTERS BY MUN
router.get('/mun/:name', async (req, res) => {
    try {
      const { name } = req.params;
      const characters = await Character.findAll({
        where: { mun: name }})
      return res.status(200).json({ characters });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch characters.' });
    }
  });

// GET CHARACTER BY NAME
router.get('/:name', async (req, res) => {
    try {
      const { name } = req.params;
  
      const character = await Character.findOne({ where: { name } });
  
      if (!character) {
        return res.status(404).json({ error: `Character with name ${name} not found.` });
      }
  
      return res.status(200).json(character);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch character.' });
    }
  });

// DELETE CHARACTER
router.delete('/:name', requireAuth, async (req, res) => {
  try {
    const { name } = req.params;
    const user = req.user;

    const character = await Character.findOne({ where: { name, mun: user.username } });

    if (!character) {
      return res.status(404).json({ error: 'Character does not belong to you.' });
    }

    await character.destroy();

    return res.status(200).json({ message: 'Character deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while deleting the character.' });
  }
});

// EDIT CHARACTER
router.put('/:name', requireAuth, validateCharacter, async (req, res) => {
  try {
    const { name } = req.params;
    const user = req.user;

    const {
      name: newName, state, picrew, fullName, pronouns, height, lineage, source,
      hexcode, weapon, power, reputation, class: characterClass, dorm,
      str, dex, con, cha, int, mag, soulbond, souldrop
    } = req.body;

    const character = await Character.findOne({ where: { name, mun: user.username } });

    if (!character) {
      return res.status(404).json({ error: 'Character does not belong to you.' });
    }

    if (newName && newName !== character.name) {
      const existingCharacter = await Character.findOne({ where: { name: newName, mun: user.username } });
      if (existingCharacter) {
        return res.status(400).json({ error: 'A character with this name already exists.' });
      }
    }

    const updatedCharacter = await character.update({
      name: newName || character.name, state, picrew, fullName, pronouns, height, lineage, source,
      hexcode, weapon, power, reputation, class: characterClass, dorm,
      str, dex, con, cha, int, mag, soulbond, souldrop
    });

    return res.status(200).json(updatedCharacter);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while updating the character.' });
  }
});


// GET MEMBERSHIPS BY CHARACTER
router.get('/:characterName/clubs', async (req, res) => {
    try {
      const { characterName } = req.params;
  
      const memberships = await Membership.findAll({
        where: { character: characterName },
        attributes: ['id', 'club', 'character']
      });
  
      if (!memberships.length) {
        return res.status(404).json({ message: `No memberships found for character: ${characterName}.` });
      }
  
      return res.status(200).json({ Memberships: memberships });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch memberships.' });
    }
  });


// GET ALL RELATIONSHIPS BY CHARACTER
router.get('/:characterName/relationships', async (req, res) => {
    try {
      const { characterName } = req.params;
  
      console.log('Fetching relationships for:', characterName);
  
      const relationships = await Relationship.findAll({
        where: { them: characterName },
        include: [
          {
            model: Character,
            attributes: ['name', 'picrew'],
          },
        ],
        order: [['updatedAt', 'DESC']],
      });
  
      if (relationships.length === 0) {
        console.log('No relationships found');
      }
  
      const relationshipsWithPicrew = relationships.map((relationship) => ({
        ...relationship.toJSON(),
        youPicrew: relationship.Character.picrew,
      }));
  
      console.log('Relationships with picrew:', relationshipsWithPicrew);
  
      res.json({ Relationships: relationshipsWithPicrew });
    } catch (error) {
      console.error('Error fetching relationships:', error);
      res.status(500).json({ error: 'Failed to fetch relationships' });
    }
  });
  

// GET RELATIONSHIP BETWEEN TWO CHARACTERS
router.get('/:characterName/relationships/:otherCharacterName', async (req, res) => {
    try {
      const { characterName, otherCharacterName } = req.params;
  
      const relationship = await Relationship.findOne({
        where: {
          you: characterName,
          them: otherCharacterName
        },
        attributes: ['id', 'you', 'them', 'special', 'description', 'updatedAt']
      });
  
      if (!relationship) {
        return res.status(404).json({ message: `No relationship found between ${characterName} and ${otherCharacterName}.` });
      }
  
      return res.status(200).json({ Relationships: [relationship] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch the relationship.' });
    }
  });


// CREATE RELATIONSHIP BETWEEN TWO CHARACTERS
router.post('/:characterName/relationships/:otherCharacterName', requireAuth, validateRelationship, async (req, res) => {
    try {
      const { characterName, otherCharacterName } = req.params;
      const { special, description } = req.body;
  
      // Ensure the relationship doesn't already exist
      const existingRelationship = await Relationship.findOne({
        where: {
          you: characterName,
          them: otherCharacterName
        }
      });
  
      if (existingRelationship) {
        return res.status(400).json({
          message: 'Relationship already exists between these characters.'
        });
      }
  
      const newRelationship = await Relationship.create({
        you: characterName,
        them: otherCharacterName,
        special,
        description
      });
  
      return res.status(201).json(newRelationship);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to create the relationship.' });
    }
  });


// EDIT RELATIONSHIP
router.put('/:characterName/relationships/:otherCharacterName', requireAuth, validateRelationship, async (req, res) => {
    try {
      const { characterName, otherCharacterName } = req.params;
      const { special, description } = req.body;
  
      const relationship = await Relationship.findOne({
        where: {
          you: characterName,
          them: otherCharacterName
        }
      });
  
      if (!relationship) {
        return res.status(404).json({ message: 'Relationship not found.' });
      }
  
      relationship.special = special;
      relationship.description = description;
      relationship.lastUpdate = new Date();
  
      await relationship.save();
  
      return res.status(200).json(relationship);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to update the relationship.' });
    }
  });


// DELETE RELATIONSHIP
router.delete('/:characterName/relationships/:id', requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
  
      const relationship = await Relationship.findByPk(id);
  
      if (!relationship) {
        return res.status(404).json({ message: 'Relationship not found.' });
      }
  
      await relationship.destroy();
  
      return res.status(200).json({ message: 'Successfully deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to delete the relationship.' });
    }
  });


  // GET ALL RELATIONSHIPS
  router.get('/relationships', async (req, res) => {
    try {
      const relationships = await Relationship.findAll({
        attributes: ['id', 'you', 'them', 'special', 'description', 'updatedAt']
      });
  
      if (!relationships.length) {
        return res.status(404).json({ message: 'No relationships found.' });
      }
  
      return res.status(200).json({ Relationships: relationships });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch relationships.' });
    }
  });

module.exports = router;
