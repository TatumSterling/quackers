const router = require('express').Router();
const { Categories, Posts, User, Likes, Comments, PostCategory } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbGalleryData = await Categories.findAll({
        include: [
          {
            model: Painting,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
      // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('homepage', {
        galleries,
  
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;