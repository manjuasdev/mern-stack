const express = require('express');
const router = express.Router();
const {getGoals, setGoal, putGoal, deleteGoal} = require('../controllers/goalController')

//router.get('/', getGoals)

//create
//router.post('/', setGoals)

//Both get and post having same path so combining line 5 and line 8 
router.route('/').get(getGoals).post(setGoal)

//update
//router.put('/:id', putGoals)

//delete
//router.delete('/:id', deleteGoals)

//Both get and post having same path so combining line 15 and line 18 
router.route('/:id').put(putGoal).delete(deleteGoal)

module.exports = router
