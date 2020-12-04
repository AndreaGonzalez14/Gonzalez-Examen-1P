const fs = require('fs');
const csv = require('csv-parser');
const colors = require('colors');
const neatCsv = require('neat-csv');


let results = [];
let resultados = [];

///Revisar la documentacion de csv-parser npm csv([options | headers])
const leercsv = (path) => {
    try {
        fs.createReadStream(path)
            .pipe(csv(["Country Name", "Country Code", "Indicator Name", "Indicator Code", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]))
            .on('data', (data) => {
                let datos = data
                results.push(datos)
            })
            .on('end', () => {
                let data = JSON.stringify(results)
                fs.writeFile('data.json', data, (err) => {
                    if (err) {
                        throw new Error('No se ha podido guardar la data')
                    }
                })

            });

    } catch (err) {
        throw new Error('Error al leer el archivo')
    }
}

//leer datos
const leerDatos = async(path) => {
    leercsv(path)
    try {
        resultados = require('../data.json');
    } catch (err) {
        resultados = []
    }

}

//Validar codigos del pais
let cod_country = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'VGB', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COK', 'CRI', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'COD', 'DNK', 'DJI', 'DMA', 'DOM', 'TLS', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'CIV', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'XXK', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'ANT', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'PRK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'COG', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SCG', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'KOR', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'VIR', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE']

const validar_country = (codigo_country) => {
    if (cod_country.includes(codigo_country) == false) {
        return false;
    } else {
        return true;
    }

}

//Funcion para mostrar los datos en consola segun el codigo del pais y el año, del archivo indicado
const mostrar_datos = (path, cod_country, anio) => {
    leerDatos(path);
    let indice = resultados.findIndex(tarea => tarea['Country Code'] == cod_country);
    if (indice >= 0) {
        let respuesta = {
            datos: resultados[indice]['Indicator Name'],
            pais: cod_country,
            anio: anio,
            valor: resultados[indice][anio]
        }
        return respuesta
    }
    return false;
}


/* let datos = mostrar_datos('../datos.csv', 'EC2', '2004')
console.log(datos) */

module.exports = {
    mostrar_datos,
    validar_country
}