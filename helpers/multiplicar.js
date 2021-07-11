const fs = require("fs");
const colors = require('colors');

/**
 *Funcion con promesa
 */

// const crearArchivoTabla = (base = 5) => {
//   return (promesa = new Promise((resolve, reject) => {

//     console.log("================");
//     console.log(`Tabla del: ${base}`);
//     console.log("================");

//     let salida = "";

//     for (let i = 1; i < 11; i++) {
//       salida += `${base} x ${i} = ${base * i} \n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt creado`);
//   }));
// };

/**
 * Funcion con async
 */

const crearArchivoTabla = async (base = 5, listar, hasta = 10) => {
  try {
    let salida, consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i} \n`;
    }

    if (listar) {
      console.log("================".green);
      console.log('Tabla del:'.green, colors.blue( base ));
      console.log("================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivoTabla,
};
