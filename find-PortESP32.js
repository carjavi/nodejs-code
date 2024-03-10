
/* funciona para:
 esp32 mini
 esp32-wroom-32
 esp8266
*/

const SerialPort = require('serialport');

// Función para buscar automáticamente el puerto del ESP32
function buscarPuertoESP32() {
    return new Promise((resolve, reject) => {
        SerialPort.SerialPort.list().then(ports => {
            const puertoESP32 = ports.find(port => {
                return port.vendorId && port.vendorId.toLowerCase().includes('10c4') && port.productId && port.productId.toLowerCase().includes('ea60');
            });

            if (puertoESP32) {
                resolve(puertoESP32.path);
            } else {
                reject(new Error('No se encontró un ESP32 conectado'));
            }
        }).catch(err => {
            reject(err);
        });
    });
}

// Uso de la función para buscar automáticamente el puerto del ESP32
buscarPuertoESP32()
    .then(puerto => {
        console.log('Puerto del ESP32 encontrado:', puerto);
        // Aquí puedes continuar con tu lógica para conectarte al puerto del ESP32
    })
    .catch(err => {
        console.error('Error al buscar el puerto del ESP32:', err);
    });
