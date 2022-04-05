const express = require('express');
const moment = require('moment');
const app = express();
const Contenedor = require('./challenge3')

const nuevoProducto = new Contenedor("./products.txt")
const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{
    console.log(`Server on port ${PORT} `);
})

server.on("error",(err)=>{
    console.log(`Error: ${err.message}`);
})


// R U T A S


app.get('/products',(req,res)=>{
    nuevoProducto.getAll()
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.send(err)
    })
})

app.get('/productoRandom',(req,res)=>{
    nuevoProducto.getProductRandom()
    .then(productRandom =>{
        res.json(productRandom);

    })
    .catch(err =>{
        res.send(err)
    })
})