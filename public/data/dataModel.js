let data = require('./data.json')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile } = require('./utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const dataId = data.find(p => p.id == id)
        resolve(dataId)
    })
}

function create(dataObj) {
    return new Promise((resolve, reject) => {
        const newDataObj = { id: uuidv4(), ...dataObj }
        data.push(newDataObj)
        writeDataToFile('./public/data/data.json', data)
        resolve(newDataObj)
    })
}

function update(id, dataObj) {
    return new Promise((resolve, reject) => {
        const index = data.findIndex(p => p.id == id)
        data[index] = { id, ...dataObj }
        writeDataToFile('./public/data/data.json', data)
        resolve(data[index])
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        data = data.filter(p => p.id != id)
        writeDataToFile('./public/data/data.json', data)
        resolve()
    })
}

function createSend(dataObj) {
    return new Promise((resolve, reject) => {
        const newDataObj = { id: uuidv4(), ...dataObj }
        data.push(newDataObj)
        writeDataToFile('./public/data/data.json', data)
        resolve(data)
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