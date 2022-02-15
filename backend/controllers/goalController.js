const asyncHandler = require('express-async-handler')
//@description  Get goals
// @route       Get /api/goals
//@acess        Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

//@description  Set goals
// @route       Post /api/goals
//@acess        Private
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({ message: 'Set goal' })
})

//@description  Update goals
// @route       Get /api/goals/:id
//@acess        Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

//@description  Delete goal
// @route       Get /api/goals
//@acess        Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}