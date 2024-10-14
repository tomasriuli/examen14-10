function IsDivisible(a, b) {
    return a % b === 0;
  }
  
  const numeros = [17, 15, 23, 60, 73, 85, 98, 105];
  
  const divisiblesDe5 = numeros.filter(num => IsDivisible(num, 5));
  
  console.log(divisiblesDe5);
  

