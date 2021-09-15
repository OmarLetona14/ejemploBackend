const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.sendStatus(400);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        res.sendStatus(400);
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.send("Tarea creada");
    } catch (error) {
        res.sendStatus(400);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = { title, description }
        await Task.findByIdAndUpdate(req.params.id, task);
        res.send("Tarea actualizada");
    } catch (error) {
        res.sendStatus(400);
    }
});

router.delete('/:id', async (req,res)=>{
    try {
        await Task.findByIdAndRemove(req.params.id);
        res.send("Tarea eliminada");
    } catch (error) {
        res.sendStatus(400);
    }
});


module.exports = router;