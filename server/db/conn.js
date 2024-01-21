const mongoose=require("mongoose");

const DB="mongodb+srv://hello:world@cluster0.hhraakj.mongodb.net/"
mongoose.connect(DB).then(()=>{
    console.log("mongoose Connection is successfull");
}).catch(()=>
{
    console.log("mongoose connection failed")
})