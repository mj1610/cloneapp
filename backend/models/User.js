const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required: true,
        min:3,
        unique: true
    },
    
    email : {
        type:String,
        required: true
    },
    
    password:{
        type:String,
        required: true,
        min:7
    },

    profilepicture:{
        type:String,
        default:""
    },

    coverpicture:{
        type:String,
        default:""
    },

    followers:{
        type:Array,
        default:[]
    },

    following:{
        type:Array,
        default:[]
    },

    isAdmin:{
        type:Boolean,
        default:false
    },

    desc:{
        type:String        
    },

    city:{
        type:String
    },

    from: {
        type: String,
        max: 50,
      },

    relationship: {
        type: Number,
        enum: [1, 2, 3],
    }
},

{
    timestamps:true
} 

);

const User = mongoose.model('User',userSchema);

module.exports = User;