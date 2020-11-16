const router = require('express').Router()
const controller = require('../controllers/exercisesController')

router.get('/', controller.getExercise)

router.post('/add', controller.addExercise)

router.get('/:id', controller.getExerciseById)

router.delete('/:id', controller.deleteExercise)

router.post('/update/:id', controller.updateExercise)

module.exports = router