const { Router} = require('express'); 
const Bycicle = require('../models/Bycicle'); 
const {Type} = require('mongoose')
const router = Router();

router.post( "/create",  async (req, res) => {
try{
    const {title, type, price, isAvailable } = req.body;
    const bike = new Bycicle({title, type, price, isAvailable}); 
    const bikeRecord = await bike.save();
    res.status(200).json({status: 'ok'});

}catch (err) {
        res.status(400).json({err: "something wrong"})
    }
})

router.post( "/del",  async (req, res) => {
    try{
    const {title, type, price, isAvailable } = req.body;
    const bike = new Bycicle({title, type, price, isAvailable}); 
    const bikeRecord = await bike.save();

    res.status(200).json({status: 'ok'});

}catch (err) {
        res.status(400).json({err: "something wrong"})
    }
})

router.post( "/rent",  async (req, res) => {
    try{
        const {title, type, price, isAvailable } = req.body;
        const bike = new Bycicle({title, type, price, isAvailable}); 
        const bikeRecord = await bike.save();
        res.status(200).json({status: 'ok'});
    
    }catch (err) {
            res.status(400).json({err: "something wrong..."})
        }
    })

router.post( "/cancel",  async (req, res) => {
    try{
        const {title, type, price, isAvailable } = req.body;
        const bike = new Bycicle({title, type, price, isAvailable}); 
        const bikeRecord = await bike.save();
        res.status(200).json({status: 'ok'});
    
    }catch (err) {
            res.status(400).json({err: "something wrong"})
        }
    })

router.get( "/create",  async (req, res) => {
    const {title, type, price, isAvailable } = req.body;
    const bike = new Bycicle({title, type, price, isAvailable}); 
    const bikeRecord = await bike.save(); 

    res.status(200).json({status: 'ok'});
})



router.delete( "/del",  async (req, res) => {
    const {title, type, price, isAvailable } = req.body;

    const bike = new Bycicle({title, type, price, isAvailable}); 
    const bikeRecord = await bike.save();
    res.status(200).json({status: 'ok'});
})


// const bike = new Bycicle({title: 'test', type: '232', price: 12, isAvailable: true}); 


module.exports = router