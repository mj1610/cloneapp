const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
})

// update post
router.put('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).send("Post updated successfully");   
        }
        else{
            res.status(400).json("You can update only urs")
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).send("Post deleted successfully");   
        }
        else{
            res.status(400).json("You can delete only urs")
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.put('/:id/like', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes:req.body.userId}});
            res.status(200).send("liked")
        }
        else{
            await post.updateOne({$pull: {likes:req.body.userId}})
            res.status(200).send("disliked")
        } 
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).send(post)
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.get("/timeline/:userId", async (req, res)=>{
   try{
        const currentUser = await User.findById(req.params.userId);
        const userpost = await Post.find({userId : currentUser._id});
        const friendsPost = await Promise.all(
            currentUser.following.map((friendId)=>{
                return Post.find({userId : friendId});
            })
        );
        res.json(userpost.concat(...friendsPost));        
   } catch(err){
       res.status(500).send(err);
   }
})

// user timeline
router.get("/profile/:username", async (req, res)=>{
    try{
         const user = await User.findOne({username : req.params.username});
         const post = await Post.find({userId: user._id});
         res.status(200).json(post)
    } catch(err){
        res.status(500).send(err);
    }
 })

module.exports = router;