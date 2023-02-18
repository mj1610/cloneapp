const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(12);
        const hashpassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashpassword
        })
        const user = await newUser.save();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user && res.status(404)){
            res.send("Invalid Credentials")
        }
        else{
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if(!validPassword && res.status(400)){
                res.send("Invalid Credentials")
            }
            else{
                res.status(200).send(user);
            }
        }
    }
    catch(err){
        res.status(500).send(err);

    }
})

module.exports = router