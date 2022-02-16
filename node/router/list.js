const express = require('express');
const router = express.Router()
const {inquire} = require('../router_handler/list')

router.get('/inquire',inquire)

module.exports = router