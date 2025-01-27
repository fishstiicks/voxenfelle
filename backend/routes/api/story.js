const express = require('express');
const { requireAuth } = require('../../utils/auth'); 
const { check } = require('express-validator');
const { Attendance } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation'); 

const validateAttendance = [
  check('story')
    .exists({ checkFalsy: true })
    .withMessage('Story attended is required.'),
  handleValidationErrors
];

const router = express.Router();

// CREATE ATTENDANCE BY SESSION USER
router.post('/attend', requireAuth, validateAttendance, async (req, res) => {
    try {
      const { username } = req.user;
      const { story } = req.body;
  
      if (!story) {
        return res.status(400).json({ error: 'Story is required' });
      }

      const existingAttendance = await Attendance.findOne({
        where: {
            username: username,
            story: story
        }
        });

        if (existingAttendance) {
            return res.status(400).json({ error: 'Attendance already exists.' });
        }
  
      const newAttendance = await Attendance.create({
        username: username,
        story
      });
  
      return res.status(201).json(newAttendance);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while creating the attendance.' });
    }
  });

// CREATE ATTENDANCE BY NAME + STORY
router.post('/attend/new', requireAuth, validateAttendance, async (req, res) => {
  try {
    const { story, username } = req.body;

    if (!story) {
      return res.status(400).json({ error: 'Story is required' });
    }

    const existingAttendance = await Attendance.findOne({
      where: {
          username: username,
          story: story
      }
      });

      if (existingAttendance) {
          return res.status(400).json({ error: 'Attendance already exists.' });
      }

    const newAttendance = await Attendance.create({
      username: username,
      story: story
    });

    return res.status(201).json(newAttendance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while creating the attendance.' });
  }
});

// CHECK ATTENDANCE BY CURRENT USER
router.get('/:story/check', requireAuth, async (req, res) => {
    try {
      const { username } = req.user;
      const { story } = req.params;
  
      const existingAttendance = await Attendance.findOne({
        where: {
          username: username,
          story: story
        }
      });
  
      if (existingAttendance) {
        return res.json({ hasAttended: true });
      }
  
      return res.json({ hasAttended: false });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong while checking attendance.' });
    }
  });

// CHECK ATTENDANCE BY ANY USERNAME
router.get('/:story/check/:username', requireAuth, async (req, res) => {
  try {
    const { story, username } = req.params;

    const existingAttendance = await Attendance.findOne({
      where: {
        username: username,
        story: story
      }
    });

    if (existingAttendance) {
      return res.json({ hasAttended: true });
    }

    return res.json({ hasAttended: false });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong while checking attendance.' });
  }
});
  

  module.exports = router;