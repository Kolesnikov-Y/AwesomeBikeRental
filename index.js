const express = require('express'); 
const mongoose = require('mongoose');  
const bikeRouts = require('./routs/AwesomeBike')
const core = require('cors'); 
const app = express();
const bodyParser = require('body-parser'); 

const PORT  = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/api/bicycle', bikeRouts);
app.use(core());


async function start(){
    try{
        await mongoose.connect('mongodb+srv://Yaroslav:303236@cluster0-tn3la.mongodb.net/AwesomeBike', {
            useNewUrlParser: true,
            useUnifiedTopology: true
         })
         app.listen(PORT, () => {
            console.log("server has been started...");  
        })
    } catch (e){
        console.log(e);
    }
    
}
start()






