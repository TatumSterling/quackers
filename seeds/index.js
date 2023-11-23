const seedCategories = require('./category-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedLikes = require('./likes-seeds');
const seedPostCategories = require('./post-category-seeds');
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedLikes();
  console.log('\n----- LIKES SEEDED -----\n');

  await seedPostCategories();
  console.log('\n----- POST CATEGORIES SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n')

  process.exit(0);
};

seedAll();
