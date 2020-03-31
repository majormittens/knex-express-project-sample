'use strict'

const router = require('express').Router()
const {
  postUsers,
  getUsers,
  getUser,
  putUser,
  deleteUser
} = require('../controllers/user_controller')

const auth = require('../middleware/auth_middleware');

router
  .route('/users')
  .post(postUsers)
  .get(getUsers)

router
  .route('/users/:id')
  .get(auth, getUser)
  .put(auth, putUser)
  .delete(auth, deleteUser)

module.exports = router
