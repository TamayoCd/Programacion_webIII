const promesa1 = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(5)
    }, 5000);
});
promesa1.then((numero) => {
    console.log("Número inicial:", numero);
    return numero * 2;
}).then((resultado) => {
     console.log("Número después de multiplicar por 2:", resultado);
    return resultado + 3; 
 }).then((final) => {
    console.log("Número final después de sumar 3:", final);
 });