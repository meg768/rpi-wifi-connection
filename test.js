var Wifi = require('./src/wifi-connection.js');
var wifi = new WifiConnection();

wifi.connect({ssid:'Julia', psk:'potatismos'}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
