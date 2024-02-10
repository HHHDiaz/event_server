const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const { getData, getDataId, createData, updateData, deleteData, getDataServer } = require('./data/dataController')
const { getUserId, createUser, updateUser, deleteUser } = require('./users/userController')

app
    .use('/static', express.static(path.resolve(__dirname, 'static')))
    .get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'))
    })
    .get('/sendServer', (req, res) => {
        getDataServer(req, res)
    })
    .get('/*', (req, res) => {
        if (req.url == '/api/data' && req.method == 'GET') {
            getData(req, res)
        }
        if (req.url.match(/\/api\/data\/([0-9-a-z]+)/) && req.method == 'GET') {
            let id = req.url.split('/')[3]
            getDataId(req, res, id)
        }
        if (req.url.match(/\/api\/user\/([0-9-a-z]+)/) && req.method == 'GET') {
            let id = req.url.split('/')[3]
            getUserId(req, res, id)
        } else {
            res.sendFile(path.resolve(__dirname, 'index.html'))
        }
    })
    .post('/api/data', (req, res) => {
        createData(req, res)
    })
    .post('/api/user', (req, res) => {
        createUser(req, res)
    })
    .put('/*', (req, res) => {
        if (req.url.match(/\/api\/data\/([0-9-a-z]+)/)) {
            const id = req.url.split('/')[3]
            updateData(req, res, id)
        }
        if (req.url.match(/\/api\/user\/([0-9-a-z]+)/)) {
            const id = req.url.split('/')[3]
            updateUser(req, res, id)
        }
    })
    .delete('/*', (req, res) => {
        if (req.url.match(/\/api\/data\/([0-9-a-z]+)/)) {
            const id = req.url.split('/')[3]
            deleteData(req, res, id)
        }
        if (req.url.match(/\/api\/user\/([0-9-a-z]+)/)) {
            const id = req.url.split('/')[3]
            deleteUser(req, res, id)
        }
    })
    .listen(PORT, () => console.log(`Server running on port ${PORT}`))