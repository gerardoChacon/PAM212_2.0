// a. Extrae los valores de nombre, edad y ciudad usadno destructuración

const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    pais: "MX",
    ciudad: "Qro"
  }
};

// Destructuración
const { nombre, edad, direccion: {ciudad}} = persona;

// Mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

// b. Filtra los productos cuyo precio sea mayor a 1000 y convierte  el resultado en un nuevo arreglo con solo los nombres de esos productos.
const productos = [
  { nombre: "Laptop", precio: 15000 },
  { nombre: "Mouse", precio: 300 },
  { nombre: "Escritorio", precio: 2500 },
  { nombre: "USB", precio: 200 }
];


let segundoEjercicio = productos
    .filter(producto => producto.precio > 1000)
    .map(producto =>  producto.nombre);

console.log(segundoEjercicio);

/* 
c. 
  1. Busca a "Luis" 
  2. Imprime el nombre de cada persona
  3. Suma todas las suma edades 
*/
const personas = [
  { nombre: "Luis", edad: 22 },
  { nombre: "Ana", edad: 19 },
  { nombre: "Carlos", edad: 30 }
];

console.log(personas.find((persona => persona.nombre === "Luis" )));

personas.forEach(persona => console.log(`${persona.nombre} tiene ${persona.edad} años`));

let sumaEdades = personas.reduce((acum, persona) => acum + persona.edad, 0);

console.log(sumaEdades)
 
