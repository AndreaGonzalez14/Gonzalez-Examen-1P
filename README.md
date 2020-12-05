# Gonzalez-Examen-1P
Exámen del Primer parcial-Plataformas Web

Aplicación de consola que permite leer un archivo csv que contiene datos de Personas que usan Internet (% de la población) distribuidos por años y paises. 
Los resultados se muestran por consola y a su vez también es posible guardar los resultados en un archivo de texto (.txt)
## Datos-Recuperados 📖
[Datos Personas que usan Internet](https://datos.bancomundial.org/indicador/IT.NET.USER.ZS) -- Archivo necesario para la aplicación que contiene los datos del Banco Mundial

## Dependencias 📦
* Colors - Mejorar la apariencia de la salida de mensajes por consola
* Yargs - Módulo para trabajar con argumentos y comandos por consola
* csv-parser - lectura del archivo csv
* neat-csv - lectura del archivo csv
## Ejemplos de Ejecución ⚙️
```
 node app.js mostrar -h
```
```
node app.js mostrar -f datos.csv --anio 2004
```
```
node app.js guardar -f datos.csv -y 2004 --pais USA
```
```
node app.js guardar -f datos.csv -y 2004 --pais ECU
```
## Autor ✒️
* **Andrea Lizeth González Lasso**
