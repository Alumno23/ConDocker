# servidor Express en https://www.npmjs.com/package/express

1. Imstalamos express

```bash
npm i express
```

2.  Luego en el package.json, modificamos en :

```yml
    "scripts": {
        "start": "node app.js"
    },
```

3. Instalamos npm y lo inicializamos:

```bash
npm install
npm init
npm start
```

# EXtención Morgan, vamos en https://www.npmjs.com/package/morgan

1. Escribimos en la app.js

```shell
  import morgan from "morgan"
  app.use(morgan('dev'))

```

2. Instalamos morgan

```bash
npm i morgan

```

3. Iniciamos npm:

```shell
npm start
```

4. En el servidor, escribimos: **localhost:3000**, y en el code nos deberia salir:

```yml
GET / 304 10.971 ms - -
GET / 304 0.641 ms - -
GET / 304 2.285 ms - -
```

es el numero de veces que lo hemos ejecutado

# Extención Nodemon en https://www.npmjs.com/package/nodemon

1. Instalamos :

```shell
npm install -g nodemon
```

2. Modificamos en el package.json

```yml
"scripts": {
    "start": "nodemon app.js"
  },

```

3. Arrancamos nodemon con: **npm start**
4. Y si queremos verificar que funcione:
   en el app.js hacemos

```shell
    res.send("Hello Mundo");
```

Vuelvamos a actualizar y nos sale como que nodemon ha cambiado la app.js

# INstalamos CSVto json en https://www.npmjs.com/package/csvtojson

para pasar un fichero csv en json

1. instalar

```shell
npm i -g csvtojson
```

2. Copiamos el style.csv que esta en pre en la carpeta ap

```bash
cp ../pre/styles.csv .
 npx csvtojson styles.csv > products.json  /*llamamos ahora styles.csv en products.json*/
```

no olvidar el punto 3. arrancar docker para la imagen con:

```shell
docker build -t products-api .
docker images

```

3.1 ejecutamos images
`shell
        docker run -p 3000:3000 products-api
    `
