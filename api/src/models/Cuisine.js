const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {    
    sequelize.define(
        'cuisine',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.ENUM(
                    'African',
                    'American',
                    'British',
                    'Cajun',
                    'Caribbean',
                    'Chinese',
                    'Eastern European',
                    'European',
                    'French',
                    'German',
                    'Greek',
                    'Indian',
                    'Irish',
                    'Italian',
                    'Japanese',
                    'Jewish',
                    'Korean',
                    'Latin American',
                    'Mediterranean',
                    'Mexican',
                    'Middle Eastern',
                    'Nordic',
                    'Southern',
                    'Spanish',
                    'Thai',
                    'Vietname'
                ),
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
