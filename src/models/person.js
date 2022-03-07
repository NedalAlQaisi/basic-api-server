"use strict";

const Person = (sequelize, DataTypes) =>
    sequelize.define("person", {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
        },

    });

module.exports = Person;