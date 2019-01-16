var express = require('express')

var router = express.Router()
var mymeans = require('./api/mymean.route')


router.use('/mymean', mymeans);


module.exports = router;
