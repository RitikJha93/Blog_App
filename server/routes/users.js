const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

//UPDATE
router.put('/:id',async(req,res)=>{
    try {
        if(req.params.id != req.body.userId){
            res.status(500).json({message:'You can update only your account'})
            return
        }
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt)
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new: true, })

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//DELETE
router.delete('/:id',async(req,res)=>{
    try {
        if(req.params.id != req.body.userId){
            res.status(500).json({message:'You can update only your account'})
            return
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"User deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//GET USER
router.get('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password,...doc} = user._doc
        res.status(200).json(doc)
    } catch (error) {
        res.status(500).json({message: error});
        console.log(error);
    }
})
module.exports = router;
