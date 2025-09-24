function obtenerDatoConCallback(callback) {
  setTimeout(() => {
    callback("Dato obtenido con callback");
  }, 1000);
}

// Convertimos el callback en una promesa
function obtenerDatoConPromesa() {
  return new Promise((resolve) => {
    obtenerDatoConCallback((resultado) => {
      resolve(resultado);
    });
  });
}

obtenerDatoConPromesa().then((dato) => {
  console.log("Resultado:", dato);
});