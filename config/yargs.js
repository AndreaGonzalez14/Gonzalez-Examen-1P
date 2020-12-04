let opciones = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'El path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        desc: 'El pais a analizar a través de su código ISO 3166 ALPHA-3'
    },
    anio: {
        alias: 'y',
        default: 1960,
        desc: 'El año para el cual se requiere las estadísticas'
    }
}
const argv = require('yargs')
    .command('mostrar', 'Imprime en la consola el resultado de la busqueda', opciones)
    .command('guardar', 'Genera un archivo de texto con el resultado de la busqueda', opciones)
    .argv;

module.exports = {
    argv
}