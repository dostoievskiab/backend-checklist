const routes = require('express').Router()
const { getAllUsers, registerUser, deleteUser, editUser } = require('../controllers/User.Controller.js');

// Rotas para Usuários
routes.get('/users', getAllUsers)
routes.post('/users', registerUser)
routes.put('/users/:id', editUser)
routes.delete('/users/:id', deleteUser)

module.exports = routes;