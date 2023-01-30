const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.saveTask)
router.get('/', TaskController.showTasks)
router.get('/:id', TaskController.detailsTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit/:id', TaskController.editSave)
router.post('/delete/:id', TaskController.deleteTask)
router.post('/done/:id', TaskController.doneTask)

module.exports = router