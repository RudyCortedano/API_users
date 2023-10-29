const { getAll, postUser, getById, deleteById, updateById } = require('../controllers/users.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(postUser)

userRouter.route('/:id')
    .get(getById)
    .delete(deleteById)
    .put(updateById)

module.exports = userRouter;