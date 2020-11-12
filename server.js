// vamos a utilizar una libreria 

const express = require('express'); // requerimos a express 
const app = express (); // declara una varibale que es el producto de expre

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8091

app.use(express.static( __dirname + '/public')) // middleware, el model que debemos servir y que sea publico
//Experss HBS engine

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs')




app.get('/', (req, res) => { 

    res.render('home',{
        nombre: 'Laura'
    } );
});

app.get('/about', (req, res) => { 

    res.render('about');
});

app.listen(port, ()=>{
    console.log(`escuchando peticiones en el puerto ${ port }`)
}) // recibe un callbak