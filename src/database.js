const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hxhc0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connection = mongoose.connect(URI);

connection.then(()=>{
    console.log("DB is connected");
}).catch((error)=>{
    console.log(`Ocurrio un error: ${error}` );
})

module.exports = connection;