function miFuncion(texto) {
  let obj = { a:0, e:0, i:0, o:0, u:0 };
  for (let l of texto) {
    if (obj[l] >= 0) obj[l]++;
  }
  return obj;
}

let obj = miFuncion("euforia");
console.log(obj);