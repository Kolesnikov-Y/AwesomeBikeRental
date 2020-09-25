const { Router } = require('express'); 
const Bike = require('../schema/schema'); 
const router = Router(); 


// method GET

router.get('/allBike',  async (req, res) => {
    try{
        await Bike.find( (err, bikes) => {
            if(err) return console.error(err);
            res.status(200).send(bikes)
        }) 
    }catch(err){
        console.error(err)
    }
})

// method POST

router.post("/allBike", async (req, res) => {
    try{
        const {name, type, isRental } = req.body; 
        const bike = new Bike({name, type, isRental})
        await bike.save()
        res.status(200).json({status: "OK"})
        console.log(req.body);
    }catch(err){
        console.error(err);
    }
})

// method DELETE

router.delete("/allBike/:id", async (req, res) => {
    try{
        await Bike.deleteOne({_id: req.params.id},  (err) => {
           if(err) res.send({massage: "OPS, i can't delete this item"})
        })
    }catch(err){
        console.error(err);
    }
})

// method UPDATE 

router.patch("/allBike/:id", async (req, res) => {
    try{
   const bike = await Bike.findOne({_id: req.params.id})
        bike.isRental = !bike.isRental
        console.log(bike)
        await bike.save()
        res.send({massage: "path this shit!"})
    }catch(err){
        res.send({massage: "we can't path this shit, MAN"})
    }
})
module.exports = router; 