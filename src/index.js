const express = require('express');
const app = express();
const morgan = require('morgan');

// Configuraciones
require('dotenv').config();
app.set('port', process.env.PORT);
app.use(morgan('dev'));
app.use(express.json());
require('./database');

// Rutas
app.use('/tasks',require('./routes/tasks.routes'));


// Se inicia el servidor
app.listen(app.get('port'), ()=>{
    console.log("Server is up");
});


