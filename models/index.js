//import models
const Category = require('./Category');
const User = require('./User');
const Likes = require('./Likes');
const Comment = require('./Comment');
const PostCategory = require('./Post_category');
const Post = require('./Post');

//user hasMany Posts (one to many)
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Posts belongsTo User 
Post.belongsTo(User, {
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
User.hasMany(Comment, {
    foreinKey: 'user_id'
});
//Comments belongsTo User
Comment.belongsTo(User, {
    foreingKey: 'user_id'
});
//Post hasMany Comments (one to many)
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
//Post hasMany Likes (one to many)
Post.hasMany(Likes, {
    foreignKey: 'post_id'
});
//Category belongsToMany Post (through PostCategory)
Category.belongsToMany(Post, {
    through: PostCategory,
    foreignKey: 'category_id'
});
//Post belongsToMany Cateogory ( through PostCategory)
Post.belongsToMany(Category, {
    through: PostCategory,
    foreignKey: 'post_id'
});

module.exports = {
    Category,
    User,
    Likes,
    Comment,
    PostCategory,
    Post,
};