var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var MyMeanController = require('../../controllers/mymean.controller.js');


// Map each API to the Controller Functions

router.get('/', MyMeanController.getMymeans)

router.post('/', MyMeanController.createMymean)

router.put('/', MyMeanController.updateMymean)

router.delete('/:id',MyMeanController.removeMymean)


// Export the Router
module.exports = router;