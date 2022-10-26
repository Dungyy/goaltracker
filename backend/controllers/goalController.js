
// package that does all the err and catching for us
const asyncHandler = require('express-async-handler');

// Bring in DB models
const Goal = require('../models/goalModel');


// @Desc   Gets Goals
// @route   GET /api/goals
// @access  Private 
const getGoal = asyncHandler(async (req, res ) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @Desc   sets Goals
// @route   POST /api/goals
// @access  Private 
const setGoal = asyncHandler(async (req, res ) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })

    res.status(200).json(goal)
})

// @Desc   Update Goals
// @route   PUT /api/goals/:id
// @access  Private 
const updateGoal = asyncHandler(async (req, res ) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @Desc   DELETE Goals
// @route   DELETE /api/goals/:id
// @access  Private 
const deleteGoal = asyncHandler(async (req, res ) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }
    await Goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getGoal, 
    setGoal, 
    updateGoal, 
    deleteGoal,
}