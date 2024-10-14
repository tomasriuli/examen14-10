const personas = [ 
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 } 

];
const nombreenMayuscula = personas => {return personas.map(persona => persona.nombre.toUpperCase())}

const nombreMayuscula = nombreenMayuscula(personas)

console.log(nombreMayuscula)
