const fetch = require('node-fetch');

var key = 'key';
var to = 'to';
var notification = {
  'title': 'Portugal vs. Denmark',
  'body': 'nya-n',
  'icon': 'firebase-logo.png',
  'click_action': 'http://localhost:4000'
};

fetch('https://fcm.googleapis.com/fcm/send', {
  'method': 'POST',
  'headers': {
    'Authorization': 'key=' + key,
    'Content-Type': 'application/json'
  },
  'body': JSON.stringify({
    'notification': notification,
    'to': to
  })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.error(error);
})