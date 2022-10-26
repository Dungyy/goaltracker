
// package that does all the err and catching for us
const asyncHandler = require('express-async-handler');

// @Desc   Gets Goals
// @route   GET /api/goals
// @access  Private 
const getGoal = asyncHandler(async (req, res ) => {
    res.status(200).json({ message: "Get Goals"})
})

// @Desc   sets Goals
// @route   POST /api/goals
// @access  Private 
const setGoal = asyncHandler(async (req, res ) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Set Goal"})
})

// @Desc   Update Goals
// @route   PUT /api/goals/:id
// @access  Private 
const updateGoal = asyncHandler(async (req, res ) => {
    res.status(200).json({ message: `update Goals ${req.params.id}`})
})

// @Desc   DELETE Goals
// @route   DELETE /api/goals/:id
// @access  Private 
const deleteGoal = asyncHandler(async (req, res ) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}`})
})


module.exports = {
    getGoal, 
    setGoal, 
    updateGoal, 
    deleteGoal,
}