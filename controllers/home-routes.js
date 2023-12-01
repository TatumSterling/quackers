const router = require('express').Router();
const { Categories, Posts, User, Likes, Comments, PostCategory } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbPostData = await Posts.findAll(
);
  
      const blogPosts = dbPostData.map((post) =>
        post.get({ plain: true })
        );


      // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('homepage',
      {
        blogPosts,
  
        // loggedIn: req.session.loggedIn
      }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;