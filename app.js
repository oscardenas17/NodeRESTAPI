import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import productsRoutes from '../src/routes/products.routes.js';
import authRoutes from '../src/routes/auth.routes';
import userRoutes from '../src/routes/user.routes'



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

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

export default app