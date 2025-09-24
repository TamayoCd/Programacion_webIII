function obtenerDatoPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = Math.random() > 0.5;
      if (exito) {
        resolve("Dato obtenido con promesa");
      } else {
        reject("No se pudo obtener el dato");
      }
    }, 1000);
  });
}

// Convertimos la promesa en callback
function obtenerDatoCallback(callback) {
  obtenerDatoPromesa()
    .then((resultado) => callback(null, resultado)) 
    .catch((error) => callback(error, null)); 
}

// Usamos el callback
obtenerDatoCallback((error, dato) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Resultado:", dato);
  }
});
