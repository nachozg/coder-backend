const express = require('express');
const moment = require('moment');
const app = express();
const Contenedor = require('./desafio3')

const nuevoProducto = new Contenedor("./products.txt")
const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{
    console.log(`Server on port ${PORT} `);
})

server.on("error",(err)=>{
    console.log(`Error: ${err.message}`);
})


// R U T A S


app.get('/productos',(req,res)=>{
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
// modulos

import {
    promises as fs
} from 'fs';
let proximoId = 0;

class Contenedor {
    constructor(pArchivo) {

        this.archivo = pArchivo
        this.arrayProductos = []

    }
    async save(objeto) {
        try {
            let archivoActual = await fs.readFile(this.archivo, "utf8");
            let archivoAObjeto = JSON.parse(archivoActual);
            //agregar id al objeto nuevo que se va a guardar
            objeto.id = proximoId + 1;
            archivoAObjeto.push(objeto);
            proximoId++;

            let volverArchivoAChar = JSON.stringify(archivoAObjeto);
            await fs.writeFile(this.archivo, volverArchivoAChar);
            return proximoId;


        } catch (error) {
            console.log(error) //
        }

    }
    async getById(id) {

        try {
            let leerArchivo = await fs.readFile(this.archivo, 'utf8');
            let json = JSON.parse(leerArchivo);
            let productoXID = json.find(productoXID => productoXID.id == id);
            return console.log(productoXID);
        } catch {
            return null
        }
    }
    async getAll() {
        //Devuelve un array con todos los objetos del archivo
        try {
            let file = await fs.readFile(this.archivo, 'utf8');
            let json = JSON.parse(file)
            this.products = json;
            return console.log(this.products)
        } catch (err) {
            console.log(err)
        }
    }
    async deleteById(id) {
        //Elimina un objeto mediante su ID
        try {
            let leerArchivo = await fs.readFile(this.archivo, 'utf8');
            let json = JSON.parse(leerArchivo)
            let product = json.filter(product => product.id != id);
            this.arrayProductos = product;
            let jsonString = JSON.stringify(product);
            fs.writeFile(this.archivo, jsonString);
        } catch (err) {
            console.log(err)
        }
    }
    async deleteAll() {
        //Elimina todos los objetos del archivo
        try {
            let productos = [];
            this.arrayProductos = productos;
            let jsonString = JSON.stringify(productos);
            fs.writeFile(this.archivo, jsonString);
        } catch (err) {
            console.log(err)
        }
    }

// toma un producto random y lo devuelve
    async getProductRandom() {
        //Devuelve un objeto al amazonArticle


        try {
            let json = await this.fileJson()

            let random = Math.floor(Math.random() * (json.length));
            return json[random];
        } catch (err) {
            console.log(err)
        }
    }


}