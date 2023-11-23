const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model {};

Likes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: 'post',
                key: 'id'
            },
        },
        comment_id: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: 'comment',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'like',
    }
);

module.exports = Likes;