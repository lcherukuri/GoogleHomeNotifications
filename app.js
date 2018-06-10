var googlehome = require('google-home-notifier');
const request = require('request');

googlehome.ip('192.168.86.88', 'en');
googlehome.device('Lokesh.GoogleHome');

googlehome.notify("Hi Lokesh! Testing 1 2 3", function(res) { });

function run() {
  request('https://api.coinbase.com/v2/prices/USD/spot', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    if(!body || !body.data) {
      return;
    }
    var btc = body.data[0];
    var btcPrice = Math.floor(btc.amount);
    var message = 'Hi Lokesh! The price of Bitcoin is $'+ btcPrice + '. I repeat $'+ btcPrice;
    googlehome.notify(message, function(res) { });
  });
}

// Run every 60 min
setInterval(() => {
  var date = new Date();
  var current_hour = date.getHours();
  if (current_hour >= 7) { // Don't Disturb during sleeping hrs
    run();
  }
}, 3600000);
