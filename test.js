var Wifi = require('./src/wifi-connection.js');
var wifi = new Wifi();

wifi.connect({ssid:'Julia', psk:'potatismos'}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
