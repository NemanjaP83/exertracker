const User = require('../models/user.model')

exports.getUser = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json('Error: ' + err))
}

exports.addNewUser = (req, res) => {
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('User added!'))
        .catch((err) => res.status(404).json('Error: ' + err))
}