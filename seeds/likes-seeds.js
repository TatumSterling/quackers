const { Likes } = require('../models');

const seedLikes = async () => {
  try {
    await Likes.sync({ force: true });

    // Sample like data
    const likeData = [
      { user_id: 1, post_id: 1 },
      { user_id: 2, post_id: 1 },
      { user_id: 3, post_id: 2 },
      { user_id: 4, post_id: 2 },
      { user_id: 5, post_id: 3 },
      { user_id: 6, post_id: 3 },
      { user_id: 1, post_id: 4 },
      { user_id: 2, post_id: 4 },
      { user_id: 3, comment_id: 1 },
      { user_id: 4, comment_id: 1 },
      { user_id: 5, comment_id: 2 },
      { user_id: 6, comment_id: 2 },
      { user_id: 1, comment_id: 3 },
      { user_id: 2, comment_id: 3 },
      { user_id: 3, comment_id: 4 },
      { user_id: 4, comment_id: 4 },
      { user_id: 5, comment_id: 5 },
      { user_id: 6, comment_id: 5 },
      { user_id: 1, comment_id: 6 },
      { user_id: 2, comment_id: 6 },
      { user_id: 3, post_id: 5 },
      { user_id: 4, post_id: 5 },
      // Add more like data as needed
    ];

    // Insert sample likes into the database
    await Likes.bulkCreate(likeData);

    console.log('Likes seeded successfully.');
  } catch (error) {
    console.error('Error seeding likes:', error);
  } finally {
    // Close the Sequelize connection
    await Likes.sequelize.close();
  }
};

seedLikes();