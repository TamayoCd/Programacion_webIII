const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Éxito!");
    }, 3000);
});

miPromesa.then((mensaje) => {
    console.log(mensaje);
});