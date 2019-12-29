# rpi-wifi-connection

Module to connect a Raspberry Pi to Wi-Fi

## Installation
	$ npm install rpi-wifi-connection --save

## Usage
    var Wifi = require('rpi-wifi-connection');
    var wifi = new Wifi();

## Methods

### constructor(iface)

Constructs a new wifi connection object.

- **iface**  - Specifies the name of the interface (default is **wlan0**)

### connect(options)

Connects to the specified network.

- **options.ssid**                   - Specifies the network name.
- **options.psk**                    - Specifies the password.
- **options.timeout**                - Specifies the number of milliseconds to wait for connection. Default is 60 seconds (60000).

````javascript
var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();

wifi.connect({ssid:'my-network', psk:'raspberry'}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
````

### scan()

Return a promise containing the available networks

````javascript

var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();

wifi.scan().then((ssids) => {
    console.log(ssids);
})
.catch((error) => {
    console.log(error);
});

// [ { bssid: 'f4:ca:e5:e7:de:58', signalLevel: -72, frequency: 2467, ssid: 'homo' },
  { bssid: 'f4:ca:e5:e7:de:5a', signalLevel: -72, frequency: 2467, ssid: 'deus' } ]
````

### getStatus()

Returns a promise containing the network status.

````javascript

var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();

wifi.getStatus().then((status) => {
    console.log(status);
})
.catch((error) => {
    console.log(error);
});

// { ssid: 'Julia', ip_address: '10.0.1.189' }
````

### getState()

Returns a promise containing the connection state. Please note that
this only returns the connection state of your Raspberry Pi for any network.
To see if you are connected to a specific network, use **getStatus()**.

````javascript
var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();

wifi.getState().then((connected) => {
    if (connected)        
        console.log('Connected to network.');
    else
        console.log('Not connected to network.');
})
.catch((error) => {
    console.log(error);
});
````

### getNetworks()

Returns a promise containing a list of Wi-Fi networks.

````javascript
var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();

wifi.getNetworks().then((networks) => {
    console.log(networks);
});

//  [ { id: 0, ssid: 'Julia' } ]
````
