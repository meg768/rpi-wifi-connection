var Wifi = require('./src/wifi-connection.js');
var wifi = new Wifi({debug:true});

function switchNetworks() {

    Promise.resolve().then(() => {
        console.log('Connecting to first network...')
        return wifi.connect({ssid:'Julia', psk:'potatismos'});
    })
    .then(() => {
        return wifi.getStatus();
    })
    .then((status) => {
        console.log('Julia status:', status);
        console.log('Switching to another network...')
        return wifi.connect({ssid:'Magnus iPhone', psk:'potatismos'});
    })
    .then(() => {
        return wifi.getStatus();
    })
    .then((status) => {
        console.log('iPhone status:', status);
    })
    .catch((error) => {
        console.log(error);
    });

}

function switchToInvalidNetwork() {

    Promise.resolve().then(() => {
        return wifi.connect({ssid:'Julia', psk:'potatismos'});
    })
    .then(() => {
        return wifi.getStatus();
    })
    .then((status) => {
        console.log('Julia status:', status);
        console.log('Switching to another network...')
        return wifi.connect({ssid:'Magnus iPhone', psk:'XXX'});
    })
    .then(() => {
        console.log('Should never get here!');
    })

    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        return wifi.getStatus();
    })
    .then((status) => {
        console.log('Current connection status:', status);
    })

}


switchToInvalidNetwork();
