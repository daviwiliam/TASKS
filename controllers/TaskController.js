const Task = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async saveTask(req, res) {
        const task = {
           title: req.body.title,
           description: req.body.description,
           done:false 
        }

        await Task.create(task)
        res.redirect('/tasks')
    }

    static async showTasks(req, res) {
        const tasks = await Task.findAll({raw:true}) 
        res.render('tasks/all', {tasks: tasks})
    }

    static async detailsTask(req, res) {
        const id = req.params.id
        const task = await Task.findOne({where:{id:id}, raw:true})
        res.render('tasks/details', {task:task})
    }

    static async editTask(req, res) {
        const id = req.params.id
        const task = await Task.findOne({where:{id:id}, raw:true})
        res.render('tasks/edit', {task:task})
    }

    static async editSave(req, res) {
        const id = req.params.id
        const title = req.body.title
        const description = req.body.description

        const taskData = {
            title: title,
            description: description
        }

        await Task.update(taskData, {where:{id:id}})

        res.redirect('/tasks')
    }

    static async deleteTask(req, res) {
        const id = req.params.id

        await Task.destroy({where:{id:id}})

        res.redirect('/tasks')
    }

    static async doneTask(req, res) {
        const id = req.params.id

        const doneData = {
            done: true
        }

        await Task.update(doneData, {where:{id:id}})

        res.redirect('/tasks')

    }

}