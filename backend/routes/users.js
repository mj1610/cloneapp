const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')

router.put("/:id", async (req, res) => {
    if(req.body.userId===req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(12)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set : req.body})
            res.status(200).send("Account has been updated")
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
    else{
        return res.status(403).json("Only your account")
    }
})

router.delete("/:id", async (req, res) => {
    if(req.body.userId===req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).send("Account has been deleted")
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
    else{
        return res.status(403).json("Can delete only your account")
    }
})

router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId ? await User.findById(userId) : await User.findOne({username: username});
        const {password, updateAt, ...others} = user._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id/follow", async (req, res) => {
    if(req.body.userId!==req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const current = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await current.updateOne({$push: {following: req.params.id}})
                res.status(200).json("user has been followed")
            }
            else{
                res.status(403).json("you are already following")
            }
        }
        catch(err){
           res.status(500).json(err); 
        }
    }
    else{
        res.status(404).send("you can't follow yourself")
    }
})


router.put("/:id/unfollow", async (req, res) => {
    if(req.body.userId!==req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const current = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId) ){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await current.updateOne({$pull: {following: req.params.id}})
                res.status(200).json("user has been unfollowed")
            }
            else{
                res.status(403).json("you are not following")
            }
        }
        catch(err){
           res.status(500).json(err); 
        }
    }
    else{
        res.status(404).send("you can't follow yourself")
    }
})
module.exports = router