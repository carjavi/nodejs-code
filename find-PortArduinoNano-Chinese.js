// arduino nano chino manufacturer: 'wch.cn'

const SerialPort = require('serialport');

// Función para buscar automáticamente el puerto del Arduino
function buscarPuertoArduino() {
    return new Promise((resolve, reject) => {
        SerialPort.SerialPort.list().then(ports => {
            const puertoArduino = ports.find(port => {
                return port.manufacturer && port.manufacturer.toLowerCase().includes('wch.cn');
            });

            if (puertoArduino) {
                resolve(puertoArduino.path);
            } else {
                reject(new Error('No se encontró un Arduino nano conectado'));
            }
        }).catch(err => {
            reject(err);
        });
    });
}

// Uso de la función para buscar automáticamente el puerto del Arduino
buscarPuertoArduino()
    .then(puerto => {
        console.log('Puerto del Arduino nano encontrado:', puerto);
        // Aquí puedes continuar con tu lógica para conectarte al puerto del Arduino
    })
    .catch(err => {
        console.error('Error al buscar el puerto del Arduino nano:', err);
    });
