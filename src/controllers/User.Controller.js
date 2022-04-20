const { user } = require('../models')

// Função que busca todos os usuários cadastrado no sistema
const getAllUsers = async (req, res, next) => {
    try {
        let response = await user.findAll({ attributes: ['id', 'name', 'email'] });
        return res.status(200).json(response);
    } catch (err) { next(err) }
}

const registerUser = async (req, res, next) => {
    try {
        let { name, email, password } = req.body

        // TODO: Placeholder for a register, need encryption for password and error handling

        await user.create({ name, email, passwordhash: password });
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
        // TODO: Placeholder for a update, need encryption for password and error handling
        let id = req.params.id
        await user.update({ name, email, passwordhash: password }, { where: { id } });
        return res.status(200).json({ msg: 'User successfully updated' });
    } catch (err) { next(err) }
}


module.exports = {
    getAllUsers,
    registerUser,
    deleteUser,
    editUser
}