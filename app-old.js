// webserver http: permite poder crear un web server 
const http = require('http');

// para poder escuchar las peticiones http primero se crear el servidor que tiene un callback
http.createServer( (req, res) => {

    res.writeHead(200, {'onten-type': 'applicacion/json'}) // tambien se puede enviar un json

        let salida = {
            nombre: 'laura',
            edad: 28, 
            url: req.url
        }

res.write (JSON.stringify(salida))
// res.write('hola mundo ');
res.end();
})
.listen(8090); // especificamos el puerto que va a estar escuchando 

console.log('escuchando el puerto 8090')
