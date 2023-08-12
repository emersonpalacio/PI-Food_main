const axios = require('axios');
require('dotenv').config();
// la base url de la API

const instance = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
});

const { API_KEY } = process.env;

const getApiInfo = async () => {
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=e5ce2a2fc3614df5ac2a9b6eba0aa8e5&number=100&addRecipeInformation=true
    try {
        const { data } = await instance(
            `/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
        );
        //console.log(data.results)
        return data.results;
    } catch (error) {
        throw new Error(error);
    }
};

const getApiInfoById = async (id) => {
    //${id}/information?apiKey=${API_KEY}
    try {
        const { data } = await instance(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        return data;
        //console.log(data)
    } catch (error) {
        throw new Error(error);
    }
};

const getApiInfoByName = async (name) => {
    try {
        const { data } = await instance(
            `/complexSearch?apiKey=${API_KEY}&titleMatch=${name}&addRecipeInformation=true`
        );
        //console.log(data.results)
        return data.results;
    } catch (error) {
        throw new Error(error);
    }
};
// exporto los helpers
module.exports = {
    getApiInfo,
    getApiInfoById,
    getApiInfoByName,
};
