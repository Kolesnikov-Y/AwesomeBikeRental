const express = require('express');
const bodyParser = require('body-parser'); 
const bikeRoutes = require('./routes/bikeRoutes')
const mongoose = require('mongoose'); 

const app = express(); 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, X-Requested-With ");

    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
        return res.status(200).json({})
    }
    next();
})

app.use('/api/bicycle', bikeRoutes);


async function start () {
    try{
        await mongoose.connect("mongodb+srv://Yaroslav:303236@cluster0-tn3la.mongodb.net/test",  {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(8080, () => {
            console.log('server has been started...')
        })
    }
    catch (e){
        console.log(e);
    }
   
}

start()



