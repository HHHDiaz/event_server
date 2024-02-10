const User = require('./userModel')
const { getPostData } = require('../data/utils')

async function getUser(req, res) {
    try {
        const user = await User.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(user))
    } catch (error) {

    }
}

async function getUserId(req, res, id) {
    try {
        const user = await User.findById(id)
        if (!id) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ "message": "Data not found" }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user))
        }
    } catch (error) {

    }
}

async function createUser(req, res) {
    try {

        const body = await getPostData(req)

        const { user1, age } = JSON.parse(body)

        const user = {
            user1,
            age
        }

        const newUser = await User.create(user)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newUser))

    } catch (error) {

    }
}

async function updateUser(req, res, id) {
    try {
        const data = await User.findById(id)
        if (!id) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ "message": "Data not found" }))
        } else {
            const body = await getPostData(req)

            const { user1, age } = JSON.parse(body)

            const user = {
                user: user1 || user.user1,
                age: age || user.age
            }

            const putUser = await User.update(id, user)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(putUser))
        }
    } catch (err) {

    }
}

async function deleteUser(req, res, id) {
    try {
        const user = await User.findById(id)
        if (!id) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ "message": "Data not found" }))
        } else {
            await User.remove(id)
            res.writeHead(200, { 'Content-Type': 'text/json' })
            res.end(JSON.stringify({ "message": `N° id: ${id} borrado...` }))
        }
    } catch (err) {

    }
}

async function getUserServer(req, res) {
    try {
        let lengthData = 0
        const user = await User.findAll()
        res.set('Content-Type', 'text/event-stream')
        res.set('Connection', 'keep-alive')
        res.set('Cache-Control', 'no-cache')
        res.set('Access-Control-Allow-Origin', '*')

        setInterval(() => {
            if (user.length > lengthUser) {
                res.status(200).write(`data: ${JSON.stringify(user)}\n\n`)
            }
            lengthUser = user.length
        }, 5000)
    } catch (error) {

    }
}

module.exports = {
    getUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser,
    getUserServer
}