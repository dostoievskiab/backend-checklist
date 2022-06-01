const { user } = require('../models')
const bcrypt = require('bcryptjs')

const getAllUsers = async (req, res, next) => {
    try {
        let response = await user.findAll({ attributes: ['id', 'name', 'email'] });
        return res.status(200).json(response);
    } catch (err) { next(err) }
}

const registerUser = async (req, res, next) => {
    try {
        let { name, email, password } = req.body

        let salt = await bcrypt.genSalt(10)
        let hashed_password = await bcrypt.hash(password, salt)

        await user.create({ name, email, password: hashed_password });
        return res.status(200).json({ msg: 'User successfully created' });
    } catch (err) { next(err) }
}

const deleteUser = async (req, res, next) => {
    try {
        let id = req.params.id
        await user.destroy({ where: { id } });
        return res.status(200).json({ msg: 'User successfully deleted' });
    } catch (err) { next(err) }
}

const editUser = async (req, res, next) => {
    try {
        let { name, email, password } = req.body
        let id = req.params.id

        let salt = await bcrypt.genSalt(10)
        let hashed_password = await bcrypt.hash(password, salt)

        await user.update({ name, email, password: hashed_password }, { where: { id } });
        return res.status(200).json({ msg: 'User successfully updated' });
    } catch (err) { next(err) }
}


module.exports = {
    getAllUsers,
    registerUser,
    deleteUser,
    editUser
}