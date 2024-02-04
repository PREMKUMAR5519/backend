const express = require("express")
const router = express.Router()
const PersonalDetail=require("../models/PersonalDetail")

// POST/PersonalDetail

router.post("/",async(req,res)=>{
    const {userId,age,height,weight,gender}=req.body

    try{
        let personalDetail = new PersonalDetail({
            userId,
            age,
            height,
            weight,
            gender
        })
        await personalDetail.save();
        res.status(201).json({msg:"personal detail added sucessfully"})
    }catch(error){
        console.error(error.message)
        res.status(500).send("server error")
    }
})

//GET/ personalDetail (particular)
router.get('/:id', async (req, res)=>{
    try {
        let defined = req.params.id
        let personalDetail = await PersonalDetail.find({userId:defined})
        res.json(personalDetail)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})
//GET/ personalDetail  (particular )for reference
router.get('/par/:id', async (req, res)=>{
    try {
        let defined = req.params.id
        let personalDetail = await PersonalDetail.find({userId:defined})
        const strinies =JSON.stringify(personalDetail)
        if (strinies === "[]") {
            res.json(false)
        } else {
            res.json(true)
            

        }
        // res.json(personalDetail)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})
//GET/ personalDetail (all)
router.get('/', async (req, res)=>{
    try {
        let personalDetail = await PersonalDetail.find({},{_id:1,userId:1})
        res.json(personalDetail)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})

//PUT/personalDetail/:id

router.put("/:id", async (req,res)=>{
    const{age,height,weight,gender}=req.body
    try {
        const personalDetail = await PersonalDetail.findById(req.params.id)
        if(!personalDetail){
            return res.status(404).json({msg:"details not found"})
        }

        // update fields
        if (age) personalDetail.age = age;
       if (height) personalDetail.height = height;
       if (weight) personalDetail.weight = weight;
       if (gender) personalDetail.gender = gender;
       await personalDetail.save()
       res.json({msg:"deatils updated sucessfully",personalDetail})
    } catch (error) {
        console.error(error.message);
       res.status(500).send("server error")
    }
})

module.exports = router