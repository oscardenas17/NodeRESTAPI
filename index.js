import app from './app';
import dotenv from 'dotenv';
import conectarDB from './database.js';
// import { createRoles } from './libs/initialSetup';

dotenv.config()
const PORT = process.env.PORT || 4000;
conectarDB();
// createRoles(); // crea Roles predefined al iniciar la app


app.listen(PORT, () =>{
    console.log('server starting on port ' + PORT);
});




