const fs = require('fs');
const csv = require('csv-parser');
const colors = require('colors');

let results = [];

///Revisar la documentacion de csv-parser npm csv([options | headers])

const leercsv = async(path) => {
    try {
        fs.createReadStream(path)
            .pipe(csv(["Country Name", "Country Code", "Indicator Name", "Indicator Code", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]))
            .on('data', async(data) => {
                await results.push(data)
                return results
            })
            .on('end', () => {
                console.log(results[5]['Country Code']);
                console.log("Lectura Exitosa");
            });
    } catch (err) {
        throw new Error('Error al leer el archivo')
    }
}

leercsv('../datos.csv')
console.log(results.length);