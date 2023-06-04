// Arreglo para almacenar los elementos
var elementos = [];

// Función para crear un nuevo elemento
function crearElemento(nombre) {
  elementos.push(nombre);
  console.log('Elemento creado: ' + nombre);
}

// Función para leer todos los elementos
function leerElementos() {
  console.log('Lista de elementos:');
  elementos.forEach(function(elemento, indice) {
    console.log(indice + ': ' + elemento);
  });
}

// Función para actualizar un elemento existente
function actualizarElemento(indice, nuevoNombre) {
  if (indice >= 0 && indice < elementos.length) {
    elementos[indice] = nuevoNombre;
    console.log('Elemento actualizado: ' + nuevoNombre);
  } else {
    console.log('Índice inválido');
  }
}

// Función para eliminar un elemento existente
function eliminarElemento(indice) {
  if (indice >= 0 && indice < elementos.length) {
    var elementoEliminado = elementos.splice(indice, 1);
    console.log('Elemento eliminado: ' + elementoEliminado);
  } else {
    console.log('Índice inválido');
  }
}

// Ejemplos de uso
crearElemento('Elemento 1');
crearElemento('Elemento 2');
leerElementos();
actualizarElemento(1, 'Elemento 2 actualizado');
eliminarElemento(0);
leerElementos();
