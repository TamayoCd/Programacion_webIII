// Versión con promesa
function obtenerNumero() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

// Versión migrada a async/await
async function mostrarNumero() {
  const numero = await obtenerNumero(); // esperamos la promesa
  console.log("Número obtenido:", numero);
}

// Llamamos a la función
mostrarNumero();