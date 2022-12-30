const { Attribute } = require('../models');

const attributedata = [
    {
        pokemon: true,
    },
    {
        dungeon_dragons: true,
    },
    {
        dog: false,
    },
    {
        games: true,
    },
    {
        fashion: true,
    },
];

const seedAttribute = () => Attribute.bulkCreate(attributedata);

module.exports = seedAttribute;

