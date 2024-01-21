const mongoose=require("mongoose");
const blogSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
})
const userSchema=mongoose.Schema({
    user_id:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    blogs:[blogSchema]
})

const Blogs=mongoose.model("Blogs",blogSchema);
const Users=mongoose.model("Users",userSchema)
module.exports={Blogs,Users}