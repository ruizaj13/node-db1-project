const express = require("express");

const db = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.use('/api/accounts', db);

server.get('/', (req, res) => {
    res.status(200).json('up and running')
})

module.exports = server;
