var SerialPort = require("serialport");

//  Scanner Serial port
SerialPort.SerialPort.list()
.then((data) => console.log(data))
.catch(err => console.log(err));