const router = require("express").Router();

const catModel = require("../models/Categories.js");

router.post("/", async (req,res)=>{
    const cat = new catModel(req.body);
    try {
        const saveCat = await cat.save();
        res.status(200).json(saveCat);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req,res)=>{
    try {
    const cat = await catModel.find();
    res.status(200).json(cat);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;