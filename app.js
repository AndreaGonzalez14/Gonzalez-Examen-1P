const yarg = require('./config/yargs').argv;
const colors = require('colors');
const { argv } = require('yargs');
const buscar = require('./buscador/buscar.js');

let comando = yarg._[0]

switch (comando) {
    case 'mostrar':

        if (buscar.validar_country(yarg.pais) == true) {
            let respuesta = buscar.mostrar_datos(yarg.archivo, yarg.pais, yarg.anio);
            if (respuesta == false) {
                console.log(`Error vuelva a intentarlo`.red)
            }
            console.log('********************************************'.green)
            console.log(colors.cyan(`Dato: ${respuesta.datos}`))
            console.log(colors.magenta(`País: ${respuesta.pais}`))
            console.log(colors.blue(`Año: ${respuesta.anio}`))
            console.log(colors.yellow(`Valor: ${respuesta.valor}`))
            console.log('********************************************'.green)
        } else {
            console.log(`Error no se encontró: ${yarg.pais}`.red)
        }

        break;
    case 'guardar':
        console.log('guardar')
        break;

    default:
        break;
}