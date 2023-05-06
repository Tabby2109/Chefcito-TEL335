const express = require('express');
const mongoose = require ("mongoose");
const userRoutes = require("./routes/user");
require("dotenv").config();

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
            
            process.env.MONGODB_URI,
            
            connectionParams
            
            );

        console.log('Conexión establecida');

    } catch (error) {

        console.log(error);

        console.log("falló la conexión");

    }

}

database();

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`));