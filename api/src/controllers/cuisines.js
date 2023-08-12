const { response, request } = require('express');
const { Cuisine } = require('../db');

const cuisinesGet = async (req = request, res = response) => {
    try {//indAll sirve par seleccionar multiples elementos del DOM
        const cuisines = await Cuisine.findAll();
        res.status(200).json(cuisines);
    } catch (error) {
        res.status(400).json({ error });
    }
};

module.exports = {
    cuisinesGet,
};
