var Wifi = require('./src/wifi-connection.js');
var wifi = new Wifi({debug:true});

wifi.connect({ssid:'Julia', psk:'potatismosX'}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
