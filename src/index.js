const express = require('express');
const mongoose = require ("mongoose");
const userRoutes = require("./routes/user");

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);


app.get('/', (req,res) => {
    res.send("Bienvenido, Rey");
});

const database = module.exports = async () => {

    const connectionParams = {

        useNewUrlParser: true,

        useUnifiedTopology: true,

    }

    try {

        await mongoose.connect(
            
            'mongodb://chefsito-tel335:password.@ac-jgnnfqc-shard-00-00.jhwkbow.mongodb.net:27017,ac-jgnnfqc-shard-00-01.jhwkbow.mongodb.net:27017,ac-jgnnfqc-shard-00-02.jhwkbow.mongodb.net:27017/?ssl=true&replicaSet=atlas-4wck24-shard-0&authSource=admin&retryWrites=true&w=majority',
            
            connectionParams
            
            );

        console.log('Se conecto compare mio');

    } catch (error) {

        console.log(error);

        console.log("fallo la conexion compare mio");

    }

}

database();

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`));