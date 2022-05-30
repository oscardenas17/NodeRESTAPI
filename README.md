# NodeRESTAPI


(App.js -  configuration express | index.js - Start app)


## Installs - Usar em6 y nodemon para cambios en server:

npm i express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet
npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D 



## Crear script en package.json para ejecutar index.js de la carpeta src "dev"
## Script para crear folder production "build"
## Script para inciar produccion "start"

  	 "start": "node buils/index.js",
   	 "build": "babel-src --out-dir build",
   	 "dev": "nodemon src/index.js --exec babel-node"

## Añadir archivo .babelrc:
{
    "presets": [
        "@babel/preset-env"
    ]
}




