const { Category } = require('../models');

const categoryData = [
    { name: 'Programming Languages' },
    { name: 'Web Development' },
    { name: 'Mobile App Development' },
    { name: 'Frameworks' },
    { name: 'Database Management' },
    { name: 'DevOps' },
    { name: 'Software Architecture' },
    { name: 'Cloud Computing' },
    { name: 'Machine Learning and AI' },
    { name: 'Version Control' },
    { name: 'Cybersecurity' },
    { name: 'Agile Development' },
    { name: 'Code Reviews' },
    { name: 'Coding Challenges' },
    { name: 'Open Source Contribution' },
    { name: 'Developer Tools' },
    { name: 'Web Design' },
    { name: 'Testing and QA' },
    { name: 'Career Development' },
    { name: 'Tech News and Trends' },
  ];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;