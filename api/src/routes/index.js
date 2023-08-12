const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('./recipes');
const dietsRouter = require('./diets');
const cuisinesRouter = require('./cuisines');

const router = Router();

//midleware
//router.use(express.json());
// application.use(morgan('dev'));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);
router.use('/cuisines', cuisinesRouter);

module.exports = router;

