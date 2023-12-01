//import models
const Categories = require('./Categories');
const User = require('./User');
const Likes = require('./Likes');
const Comments = require('./Comment');
const PostCategory = require('./Post-category');
const Posts = require('./Post');

//user hasMany Posts (one to many)
User.hasMany(Posts, {
    foreignKey: 'user_id'
});
//Posts belongsTo User 
Posts.belongsTo(User, {
    foreingKey: 'user_id'
});
//user hasMany Likes (one to many)
User.hasMany(Likes, {
    foreingKey: 'user_id'
});
//Likes belongsTo User 
Likes.belongsTo(User, {
    foreignKey: 'user_id'
});
//user hasMany Comments (one to many)
User.hasMany(Comments, {
    foreinKey: 'user_id'
});
//Comments belongsTo User
Comments.belongsTo(User, {
    foreingKey: 'user_id'
});
//Post hasMany Comments (one to many)
Posts.hasMany(Comments, {
    foreignKey: 'post_id'
});
//Post hasMany Likes (one to many)
Posts.hasMany(Likes, {
    foreignKey: 'post_id'
});
//Category belongsToMany Post (through PostCategory)
Categories.belongsToMany(Posts, {
    through: PostCategory,
    foreignKey: 'category_id'
});
//Post belongsToMany Cateogory ( through PostCategory)
Posts.belongsToMany(Categories, {
    through: PostCategory,
    foreignKey: 'post_id'
});

module.exports = {
    Categories,
    User,
    Likes,
    Comments,
    PostCategory,
    Posts,
};