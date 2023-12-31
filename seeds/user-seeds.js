const { User } = require('../models');

const seedUsers =  () => {


    // Sample user data
    const userData = [
        {
          username: 'john_doe',
          email: 'john.doe@example.com',
          password: 'password123',
        },
        {
          username: 'jane_smith',
          email: 'jane.smith@example.com',
          password: 'secret456',
        },
        {
          username: 'bob_carter',
          email: 'bob.carter@example.com',
          password: 'secure789',
        },
        {
          username: 'alice_jones',
          email: 'alice.jones@example.com',
          password: 'letmein321',
        },
        {
          username: 'sam_wilson',
          email: 'sam.wilson@example.com',
          password: 'captainamerica',
        },
        {
          username: 'lisa_parker',
          email: 'lisa.parker@example.com',
          password: 'webdeveloper',
        },
    ];

  // bulk create user data
    User.bulkCreate(userData);

    console.log('Users seeded successfully.');

};

module.exports = seedUsers;