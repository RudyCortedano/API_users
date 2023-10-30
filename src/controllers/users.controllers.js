const catchError = require('../utils/catchError');
const Users = require('../models/Users');

// get
const getAll = catchError(async(req, res) => {
    const allUsers = await Users.findAll();
    return res.json(allUsers)
});

// post
const postUser = catchError(async(req, res) =>{
  const { first_name, last_name, email, password, birthday } = req.body;
  const add = await Users.create({
    first_name,
    last_name,
    email,
    password,
    birthday
  })
  return res.json(add)
});

// get/:id
const getById = catchError(async(req, res) =>{
  const {id} = req.params;
  const userID = await Users.findByPk(id);
  return res.json(userID)
});

// delete/:id
const deleteById = catchError(async(req, res) =>{
  const {id} = req.params;
  await Users.destroy({where: {id}})
  return res.sendStatus(201)
});

//  put/:id
const updateById = catchError(async(req, res) =>{
  const {id} = req.params;
  const { first_name, last_name, email, password, birthday } = req.body
  const updateUser = await Users.update(
    { first_name, last_name, email, password, birthday },
    { where: {id}, returning:true }
  )
  return res.json(updateUser)
});

module.exports = {
    getAll,
    postUser,
    getById,
    deleteById,
    updateById
}