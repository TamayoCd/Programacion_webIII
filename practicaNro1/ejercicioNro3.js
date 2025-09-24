function miFuncion(arreglo) {
  let obj = { pares: [], impares: [] };
  let p = 0, q = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      obj.pares[p] = arreglo[i]; p++;
    } else {
      obj.impares[q] = arreglo[i]; q++;
    }
  }
  return obj;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj);