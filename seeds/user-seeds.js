const { User } = require('../models');
const faker = require('faker');

const seedUsers = async () => {
  try {
    // Drop the existing table if it exists (for demonstration purposes)
    await User.sync({ force: true });

    // Create fake users
    const fakeUsers = Array.from({ length: 10 }, () => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }));

    // Insert fake users into the database
    await User.bulkCreate(fakeUsers);

    console.log('Fake users seeded successfully.');
  } catch (error) {
    console.error('Error seeding fake users:', error);
  } finally {
    // Close the Sequelize connection
    await User.sequelize.close();
  }
};

seedUsers();