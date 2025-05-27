const express = require('express');
const router = express.Router();
const {getGoals, setGoal, putGoal, deleteGoal} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

//router.get('/', getGoals)

//create
//router.post('/', setGoals)

//Both get and post having same path so combining line 5 and line 8 
router.route('/').get(protect, getGoals).post(protect, setGoal)

//update
//router.put('/:id', putGoals)

//delete
//router.delete('/:id', deleteGoals)

//Both get and post having same path so combining line 15 and line 18 
router.route('/:id').put(protect, putGoal).delete(protect, deleteGoal)

module.exports = router
