const capicuas = str => str === str.split('').reverse().join('');

const cantidadDeLetras = arr => 
  arr.filter(capicuas)
     .reduce((acc, str) => acc + str.length, 0); 

const strings = ["oso", "arenera", "Taiere", "salas", "voca", "reconocer"];

const resultado = cantidadDeLetras(strings);

console.log(resultado);

