import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'
import productsRoutes from '../src/routes/products.routes'


const app = express();

//Muestra en consola las llamadas https realizadas
app.use(morgan('dev'));
//leer datos json que llegan al server
app.use(express.json());

app.set('pkg',pkg)



app.get('/', (req,res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
    })
})

app.use('/products',productsRoutes)

export default app