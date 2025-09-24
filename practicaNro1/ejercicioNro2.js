function miFuncion(cad) {
  let invertida = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    invertida = invertida + cad[i];
  }
  return invertida;
}

let cad = miFuncion("abcd");
console.log(cad);