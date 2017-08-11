const https = require('https')
const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()

const host = 'localhost'

app.use('/src', express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, 'private-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'public-key.crt'))
}, app)
    .listen({
      host,
      port: 3000
    }, () => {
      console.log('Node app is running on port', 3000)
    })
