const express=require("express")
const app=express();
const cors=require("cors")
const {Blogs,Users} =require("./models/UserSchema")

require("./db/conn");
app.use(express.json())
app.use(cors())
async function check(user_id)
{
    try {
        const res = await Users.findOne({ user_id: user_id });
        if (res == null) {
          return false;
        } else {
          return true;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
}
app.post("/login",async(req,res)=>
{
    const user_id=req.body.user_id;
    const password=req.body.password;

    console.log(user_id+" "+password);
    const temp=await check(user_id);
    if(temp == false)
    {
        res.status(200).send({flag:"false",msg:"Invalid Credentials"});
    }
    const user=await Users.findOne({user_id:user_id});
    if(user.password == password)
    {
        res.status(200).send({flag:"true",msg:"Successfully log in"});
    }
    else{
        res.status(200).send({flag:"false",msg:"Invalid credentials"});
    }

})

app.post("/registeration",async(req,res)=>
{
    const user_id=req.body.user_id;
    const password=req.body.password;
    const cpassword=req.body.cpassword;
    const temp=await check(user_id);
    if(cpassword!=password)
    {
        res.status(200).send({flag:"false",msg:"password doesnot match"});
    }
    else if(temp)
    {
        res.status(200).send({flag:"false",msg:"user already exits"});
    }
    else{
        
        const user=new Users({user_id:user_id,password:password});
        try{
            await user.save();
            res.status(200).send({flag:"true",msg:"Registration succesfull"});
        }
        catch(err)
        {
            console.log(err);
            res.status(200).send({flag:"false",msg:"Registration Failed"});
        }
        

        
    }

})

app.post("/add_blog",async(req,res)=>
{
    const user_id=req.body.user_id;
    const title=req.body.title;
    const content=req.body.content;

    try{
    const user=await Users.findOne({user_id:user_id});
    const blog=new Blogs({title:title,content:content});
    user.blogs.push(blog);
    await user.save();
    res.status(200).send({msg:"Succesfull"});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({msg:"Error"});
        
    }
})
app.post("/show_blog",async(req,res)=>
{
    const user_id=req.body.user_id;
    const user= await Users.findOne({user_id:user_id});
    const blog=user.blogs;

    res.send(blog);

})
app.post("/delete_blog",async(req,res)=>
{
    const user_id=req.body.user_id;
    const title=req.body.title;
    const content=req.body.content;
    const user=await Users.findOne({user_id:user_id});
    if(user == null)
    {
        res.send({msg:"User not found"});
    }
    else{
        await Users.updateOne({ user_id: user_id }, { $pull: { blogs: { title: title, content: content } } });
        res.send({msg:"deleted successfully"})   
    }
})
app.listen(3002,()=>
{
    console.log("app is listening at port");
})