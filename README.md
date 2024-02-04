<p align="center"><img src="https://raw.githubusercontent.com/carjavi/nodejs-code/master/img/nodejs.png" height="200" alt=" " /></p>
<br>
<h1 align="center">Nodejs code</h1> 
<h4 align="right">Dic 22</h4>

<img src="https://img.shields.io/badge/OS-Linux%20GNU-yellowgreen">
<img src="https://img.shields.io/badge/OS-Windows%2011-blue">
<img src="https://img.shields.io/badge/Hardware-Raspberry%20ver%204-red">
<img src="https://img.shields.io/badge/Hardware-Raspberry%203B%2B-red">
<img src="https://img.shields.io/badge/Hardware-Raspberry%20Zero-red">
<img src="https://img.shields.io/badge/Node%20-V18.7.0-green">

<br>



# Async Await de JavaScript

## Promise
Conceptualmente una promesa es sólo JavaScript prometiendo retornar un valor.

Para registrar una función que se ejecute en caso de éxito usamos ```.then```<br>
para registrar una función que se ejecute en caso de fallo usamos ```.catch```

sample:
```
// Fetch retorna una promesa
fetch("https://swapi.dev/api/people/1")
    .then((res) => console.log("Esta función es retornada cuando la solicitud es exitosa",res))
    .catch(err => console.log("Esta función es retornada cuando la solicitud es fallida", err))
    
// Encadenando multiples funciones
fetch("https://swapi.dev/api/people/1")
    .then((res) => hazAlgoConElResultado(res))
    .then((resultadoFinal) => console.log(resultadoFinal))
    .catch((err => hazAlgoConElError(err))
```

# Async/Await
Async/Await es una forma de escribir promesas que nos permite escribir código asincrónico, pero de manera sincrónica. 

sample:
```
const obtenerData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
   
   console.log(data)
}

obtenerData()
```
Aquí, nada ha cambiado bajo el capó. Seguimos usando promesas para obtener la data, pero ahora parece sincrónico, y ya no tiene los bloques .then y .catch.

Cuando usas ***async/await*** no estas bloqueando porque la función está devolviendo el control al programa principal. Luego cuando la promesa resuelve estamos usamos el generador para devolver el control a la función asincrónica con el valor de la promesa resuelta.

En efecto, podemos ahora escribir código asíncrono como sin fuera sincrónico. Lo que significa que es más fácil razonarlo, y podemos usar herramientas sincrónicas para manejo de errores como ***try/catch***:

```
const obtenerData = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await respuesta.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

obtenerData()
```

 # await an asynchronous child process
```
const { execSync } = require("child_process");

```
Callback. Función que se ejecuta cuando una operación asíncrona termina, como resultado de la misma.


# How To Launch Child Processes in Node.js

***Option 1***
```
const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});

```

***Option 2***
```
var exec = require('child_process').exec,
    child;

child = exec('node test2.js {{args}}',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
```


# Buscar una palabra en un JSON poniendo la palabra de busqueda en el argumento

```
var value = process.argv[2];


const fs = require('fs');

// Ruta al archivo JSON
const filePath = 'data.json';

console.log(value);

// Palabra que queremos buscar
const targetWord = value;

// Lee el archivo JSON
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  try {
    // Convierte el contenido del archivo a un objeto JavaScript
    const jsonData = JSON.parse(data);

    // Itera sobre las propiedades (claves) del objeto
    for (const key in jsonData) {
      if (key === targetWord) {
        console.log(`Palabra exacta '${targetWord}' encontrada en la clave '${key}': ${jsonData[key]}`);
      }
    }
  } catch (error) {
    console.error('Error al analizar el contenido JSON:', error);
  }
});
```


Json file:
```
data.json
{
    "ls": " ls archivo JSON.",
    "ls2": "ls2 epa archivo JSON.",
    "mkdir": "mkdir perro archivo JSON.",
    "rm": "rm gato archivo JSON."
}
```

<br>

# Sample Etiquetas normalizadas
```
/**
 * @fileoverview Menú aprMenu, desplegable con efecto expansión suavizado
 * @version 1.1
 * @author Carlos Briceño <carjavi@hotmail.com>
 * @copyright  https://www.instintodigital.net/
 * @license
 * @see https://github.com/carjavi/nodejs-code
 * @supported Testado en IE10+ y en FF26+
 * 
 * History
 * v2.2 – Se mejoró el efecto de expansión de los submenús dándole efecto aceleración
 * v2.0 – Se evitó que quedaran supersupuestos textos de submenús
 * v1.1 – Se mejoró la compatibilidad con navegadores Opera
 * ----
 * La primera versión de aprMenu fue escrita por Karl Monitrix
 */
```
<br>

# Tips
 modo estricto nos prermite visualizar errores que por lo general no se muestran en cosola porque el sistema los pasa por alto
```
"use strict"; 
```

<br>

---
Copyright &copy; 2022 [carjavi](https://github.com/carjavi). <br>
```www.instintodigital.net``` <br>
carjavi@hotmail.com <br>
<p align="center">
    <a href="https://instintodigital.net/" target="_blank"><img src="https://raw.githubusercontent.com/carjavi/nodejs-code/master/img/developer.png" height="100" alt="www.instintodigital.net"></a>
</p>