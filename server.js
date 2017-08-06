const http = require('http')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('{"key": "value"}')
});

http.createServer(app)
    .listen(3000, () => {
        console.log('Node app is running on port', 3000)
    })