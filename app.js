import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'
import productsRoutes from '../src/routes/products.routes'


const app = express();


app.set('pkg',pkg)
app.use(morgan('dev'));


app.get('/', (req,res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
    })
})

app.use('/products',productsRoutes)

export default app