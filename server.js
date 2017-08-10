const http = require('http')
const path = require('path')

const cron = require('node-cron');
const fetch = require('node-fetch');
const express = require('express')
const app = express()

const apiKey = 'nya-n'

// app.static(path.resolve(__dirname))
const host = 'your host'

app.use('/src', express.static('src'));

app.get('/hoge', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Cache-Control', 'max-age=60')
  fetch(`http://apilayer.net/api/live?access_key=${apiKey}`)
  .then((ret) => {
    return ret.json()
  })
  .then((ret) => {
    res.send(JSON.stringify(ret))
  })
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

http.createServer(app)
    .listen({
      host,
      port: 3000
    }, () => {
      console.log('Node app is running on port', 3000)

      new cron.schedule('* * * * * *', function() {
        console.log('You will see this message every second');
      }, null, true, 'America/Los_Angeles');
    })