// clase 2 entrega 1 
let usuarios = [];
let mascotas = [];
let libros = [];

class Usuario {
    constructor(pNombre, pApellido, pLibros, pMascotas) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.libros = pLibros;
        this.mascotas = pMascotas;
        
        

    }
    getFullName() {
        let nombreCompleto = `${this.nombre} ${this.apellido}`;
        return nombreCompleto
    }
    addMascotas(nombreMascota) {
        mascotas.push(nombreMascota)


    }
    countMascotas(mascotas) {

        return mascotas.length
    }


    addBooks(libro, autor) {
        nuevoLibro = `titulo: ${libro}, autor: ${autor}`
        libros.push(nuevoLibro);
    }
    getBookNames() {
        let titulosUsuario = [];
        for (let i = 0; i < libros.length; i++) {
            let libroActual = libros[i];
            let tituloLibro = libroActual.nombreLibro;
            titulosUsuario.push(tituloLibro);

        }
        return titulosUsuario

    }
}

function subirUsuario(nombre, apellido, libros, mascotas) {
    let usuario = new Usuario(nombre, apellido, libros, mascotas);
    usuarios.push(usuario)


}
librosGonzalo = ['2 vueltas en 4', 'aventuras en el regency']
mascotasGonzalo = ['gallina', 'dawson']
subirUsuario(Gonzalo, Bergessio, librosGonzalo, mascotasGonzalo)