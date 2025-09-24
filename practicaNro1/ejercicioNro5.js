const esPalindromo = (cadena) => {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida = invertida + cadena[i];
    }
    return invertida === cadena;
};

let band = esPalindromo("plata");
console.log(band);

band = esPalindromo("oro");
console.log(band); 