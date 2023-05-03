const express = require('express');
const mongoose = require ("mongoose");
const userRoutes = require("./routes/user");

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);


app.get('/', (req,res) => {
    res.send("welcome to my API");
});

const database = module.exports = async () => {

    const connectionParams = {

        useNewUrlParser: true,

        useUnifiedTopology: true,

    }

    try {

        await mongoose.connect(
            
            'mongodb://Roshar:XCACrX3siiL9WoUJ@ac-wvk5edf-shard-00-00.j4xhw9s.mongodb.net:27017,ac-wvk5edf-shard-00-01.j4xhw9s.mongodb.net:27017,ac-wvk5edf-shard-00-02.j4xhw9s.mongodb.net:27017/?ssl=true&replicaSet=atlas-147a0g-shard-0&authSource=admin&retryWrites=true&w=majority',
            
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