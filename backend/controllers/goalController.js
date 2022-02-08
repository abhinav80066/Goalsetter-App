//@description  Get goals
// @route       Get /api/goals
//@acess        Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

//@description  Set goals
// @route       Post /api/goals
//@acess        Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

//@description  Update goals
// @route       Get /api/goals/:id
//@acess        Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

//@description  Delete goal
// @route       Get /api/goals
//@acess        Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}