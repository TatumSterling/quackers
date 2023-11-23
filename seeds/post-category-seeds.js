const { PostCategory } = require('../models');

const seedPostCategory = async () => {
  try {

    await PostCategory.sync({ force: true });

    // Sample data for post-category associations
    const postCategoryData = [
      { post_id: 1, category_id: 1 },
      { post_id: 1, category_id: 2 },
      { post_id: 2, category_id: 3 },
      { post_id: 2, category_id: 4 },
      { post_id: 3, category_id: 5 },
      { post_id: 3, category_id: 1 },
      { post_id: 4, category_id: 17 },
      { post_id: 4, category_id: 17 },

    ];

    // Insert sample data into the database
    await PostCategory.bulkCreate(postCategoryData);

    console.log('PostCategory associations seeded successfully.');
  } catch (error) {
    console.error('Error seeding PostCategory associations:', error);
  } finally {
    // Close the Sequelize connection
    await PostCategory.sequelize.close();
  }
};

seedPostCategory();