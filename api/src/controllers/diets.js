const { response, request } = require('express');
const { Diet } = require('../db');

const dietsGet = async (req = request, res = response) => {
    try {
        const diets = await Diet.findAll();
        res.status(200).json(diets);
    } catch (error) {
        res.status(400).json({ error });
    }
};
module.exports = {
    dietsGet,
};


// const dietsGet = async (req = request, res = response) => {
//     try {
//         // const diets = await Diet.findAll();
//         const diets = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=e5ce2a2fc3614df5ac2a9b6eba0aa8e5&number=100&addRecipeInformation=true");
//         const allDiets = await diets.data;

//         for (diets of allDiets.results) {
//                 const find = await Diet.findOne({ where: { name: type.name } });
//                 if (!find) {
//                     //se crea en la db
//                     await Diet.create({ name: type.name });
//                 } else {
//                     return res.json(await Diet.findAll());
//                 }
//             }

//         //res.status(200).json(diets);
//         res.status(200).json(await Diet.findAll());
//     } catch (error) {
//         res.status(400).json({ error });
//     }
// };
// module.exports = {
//     dietsGet,
// };


// const axios = require("axios");
// const { Router } = require("express");
// const { Type } = require("../db");

// const router = Router();

// router.get("/", async (_req, res) => {
//   try {
//     const pokemonTypesApi = await axios.get("https://pokeapi.co/api/v2/type");
//     const allType = await pokemonTypesApi.data;

//     for (type of allType.results) {
//       const find = await Type.findOne({ where: { name: type.name } });
//       if (!find) {
//         //se crea en la db
//         await Type.create({ name: type.name });
//       } else {
//         return res.json(await Type.findAll());
//       }
//     }
//     res.status(200).json(await Type.findAll());
//   } catch (error) {
//     return { error: error.message };
//   }
// });

// module.exports = router;

