'use strict'

const router = require('express').Router()
const auth = require('../middleware/auth_middleware');

router.route('/status').get(auth, (req, res) => {
    res({msg: 'ok'})
})

module.exports = router