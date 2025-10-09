class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Empresa {
  constructor() {
    this.edadTope = 60;
  }

  puedeIngresar(persona) {
    return persona.edad <= this.edadTope;
  }
}

let empresa = new Empresa();

let persona1 = new Persona("Juan", 45);
let persona2 = new Persona("María", 62);
let persona3 = new Persona("Pedro", 59);

let inhabilitadas = 0;

if (!empresa.puedeIngresar(persona1)) {
    inhabilitadas++;
}
if (!empresa.puedeIngresar(persona2)) {
    inhabilitadas++;
}
if (!empresa.puedeIngresar(persona3)) {
    inhabilitadas++;
}

document.write("Cantidad de personas inhabilitadas: " + inhabilitadas);
