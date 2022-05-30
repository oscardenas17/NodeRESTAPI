import app from './app';
import dotenv from 'dotenv';
import conectarDB from './database.js';

dotenv.config()
const PORT = process.env.PORT || 4000;
conectarDB();



app.listen(PORT, () =>{
    console.log('server starting on port ' + PORT);
});




