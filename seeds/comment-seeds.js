const { Comments } = require('../models');

const seedComments =  () => {


    // Sample comment data
    const commentData = [
        {
          post_id: 1,
          user_id: 1,
          content: 'Great post! Thanks for sharing.',
        },
        {
          post_id: 2,
          user_id: 2,
          content: 'I learned a lot from this article.',
        },
        {
          post_id: 1,
          user_id: 3,
          content: 'Nice explanation. Looking forward to more content.',
        },
        {
          post_id: 3,
          user_id: 4,
          content: 'This is really helpful. Can you provide more examples?',
        },
        {
          post_id: 2,
          user_id: 5,
          content: 'I have a question about the third paragraph. Can you clarify?',
        },
        {
          post_id: 3,
          user_id: 6,
          content: 'Well-written! I appreciate the details provided.',
        },
        {
          post_id: 4,
          user_id: 1,
          content: 'Fantastic post! I shared it with my colleagues.',
        },
        {
          post_id: 4,
          user_id: 2,
          content: 'Thank you for the insights. Keep up the good work.',
        },

      ];

    // Insert sample comments into the database
    Comments.bulkCreate(commentData);

    console.log('Comments seeded successfully.');

};

module.exports = seedComments;