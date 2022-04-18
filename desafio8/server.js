import express from 'express';
import Productos from '../api/Productos.js';

export const router = express.Router();
export const viewRouter = express.Router();

const productos = new Productos();

viewRouter.get('/productos/vista', (req, res) => {
    const listOfProducts = productos.getProducts();
    console.log(listOfProducts);
    res.render("vista", {
        hayProductos: Array.isArray(listOfProducts),
        productos: listOfProducts
    })
})

router.get('/productos/listar', (req, res) => {
    res.json(productos.getProducts())
});

router.get('/productos/listar/:id', (req, res) => {
    console.log(req.params.id);
    res.json(productos.getProducts(req.params.id))
});

router.post('/productos/guardar', (req, res) => {
    const product = req.body;
    productos.addProduct(product);
    res.redirect('/')
});

router.put('/productos/actualizar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = {
        id: id,
        ...req.body
    };
    res.json(productos.updateProduct(updateData));
});

router.delete('/productos/borrar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(productos.deleteProduct(id));
});


// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});