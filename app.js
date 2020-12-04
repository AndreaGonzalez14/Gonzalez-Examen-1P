const yarg = require('./config/yargs').argv;
const colors = require('colors');

let comando = yarg._[0]

switch (comando) {
    case 'mostrar':
        console.log('mostrar')
        break;
    case 'guardar':
        console.log('guardar')
        break;

    default:
        break;
}