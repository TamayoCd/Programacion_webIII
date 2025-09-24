//reescribir mejor con async/await haciendo el código más limpio y mantenible.
/*function obtenerSaludo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola");
    }, 2000);
  });
}

function agregarNombre(saludo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(saludo + ", Juan");
    }, 2000);
  });
}

obtenerSaludo().then((saludo) => {
  agregarNombre(saludo).then((mensajeFinal) => {
    console.log(mensajeFinal);
  });
});*/
function obtenerSaludo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola");
    }, 1000);
  });
}

function agregarNombre(saludo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(saludo + ", Juan");
    }, 2000);
  });
}

async function saludar() {
  const saludo = await obtenerSaludo();
  const mensajeFinal = await agregarNombre(saludo);
  console.log(mensajeFinal);
}

saludar();