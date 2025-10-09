class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let personas = [
  new Persona("Juan", 25),
  new Persona("María", 40),
  new Persona("Pedro", 40),
  new Persona("Ana", 30)
];

let edadMaxima = personas[0].edad;
for (let i = 1; i < personas.length; i++) {
  if (personas[i].edad > edadMaxima) {
    edadMaxima = personas[i].edad;
  }
}

let mayores = [];
for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad === edadMaxima) {
    mayores.push(personas[i].nombre);
  }
}

document.write("La(s) persona(s) de mayor edad: " + mayores.join(", ") + "<br>");
document.write("Edad: " + edadMaxima + "<br>");

if (mayores.length > 1) {
  document.write("Hay más de una persona con la edad mayor.");
} else {
  document.write("Solo hay una persona con la edad mayor.");
}
