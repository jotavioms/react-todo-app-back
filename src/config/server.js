const PORT = 3003;

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.listen(PORT, function () {
  console.log(`BACKEND is running on port ${PORT}`);
})

module.exports = server;