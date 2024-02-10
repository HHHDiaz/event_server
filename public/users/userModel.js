let user = require('./users.json')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile } = require('../data/utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(user)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const userId = user.find(p => p.id == id)
        resolve(userId)
    })
}

function create(userObj) {
    return new Promise((resolve, reject) => {
        const newUserObj = { id: uuidv4(), ...userObj }
        user.push(newUserObj)
        writeDataToFile('./public/users/users.json', user)
        resolve(newUserObj)
    })
}

function update(id, userObj) {
    return new Promise((resolve, reject) => {
        const index = user.findIndex(p => p.id == id)
        user[index] = { id, ...userObj }
        writeDataToFile('./public/users/users.json', user)
        resolve(user[index])
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        user = user.filter(p => p.id != id)
        writeDataToFile('./public/users/users.json', user)
        resolve()
    })
}

function createSend(userObj) {
    return new Promise((resolve, reject) => {
        const newUserObj = { id: uuidv4(), ...userObj }
        user.push(newUserObj)
        writeDataToFile('./public/users/users.json', user)
        resolve(user)
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    createSend
}