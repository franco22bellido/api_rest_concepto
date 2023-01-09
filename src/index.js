const express = require('express');
const app = express();

//middlewares
app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//ruta bienvenido.
app.use(require('/api/ruta_ejemplo','./routes/index'));
//rutas crud
app.use('/api/guitarrist',require('./routes/guitarist'));


app.listen(app.get('port'), ()=>{
    console.log(`Server on port `+ app.get('port'));
});