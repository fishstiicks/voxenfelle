const express = require('express');
const { Badge, BadgeCollection } = require('../../db/models');

const router = express.Router();

router.get('/:username', async (req, res) => {
    try {
      const { username } = req.params;
  
      const badgeList = await BadgeCollection.findAll({
        where: { username: username }, 
        include: [
            {
                model: Badge,
                attributes: ['description', 'badgeUrl']
            }
        ],
        order: [['id', 'ASC']],
    });
  
      if (badgeList.length === 0) {
        return res.status(404).json({ error: `No badge collection found for user: ${username}.` });
      }
  
      return res.status(200).json({ badges: badgeList });
    } catch (error) {
      return res.status(500).json({ error: 'Unable to fetch badge collection for the user.' });
    }
  });


module.exports = router;