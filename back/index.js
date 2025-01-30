import {PORT} from './src/utils/config.js'; 
import {connectDB} from './src/utils/db.js';  
import {app} from './app.js';

connectDB()
.then(()=> {
    console.log('Conection with DB');
    app.listen(PORT,'0.0.0.0', ()=>{console.log(`Server running in port ${PORT}`);})
}).catch(() => console.log('Error to connect DB'))