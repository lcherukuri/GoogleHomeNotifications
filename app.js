var googlehome = require('./google-home-notifier');
const request = require('request');

googlehome.ip('192.168.86.88', 'en');
googlehome.device('Lokesh.GoogleHome');

function run() {
  request('https://api.coinbase.com/v2/prices/USD/spot', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    if(!body || !body.data) {
      return;
    }
    var btc = body.data[0];
    var btcPrice = Math.floor(btc.amount);
    var message = 'Hi there! The price of Bitcoin is $'+ btcPrice + '. I repeat $'+ btcPrice;
    googlehome.notify(message, function(res) { });
  });
}

run();

// Run every 4 hrs
setInterval(() => {
  var date = new Date();
  var current_hour = date.getHours();
  if (current_hour >= 10 && current_hour <= 22) { // Don't Disturb during sleeping hrs
    run();
  }
}, 14400000);
