import mongoose from "mongoose";
import { createRoles } from './libs/initialSetup';

 

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );

     const url = `${connection.connection.host}: ${connection.connection.port}`;
     console.log('Db conectada en ' + url);  

     createRoles(); 
     
    }   catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }

}

export default conectarDB;
