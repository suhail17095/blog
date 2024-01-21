import React from 'react'
import axios from "axios";
import { useState } from "react";
function AddBlogs(props) {
    const [blog, setblog] = useState({ title: "", content: "" });
    function handleChange(e)
    {
        const name=e.target.name;
        const value=e.target.value;

        setblog({
            ...blog,
            [name]:value
        })
    }
    function submit(e)
    {
        e.preventDefault();
        const user_id=props.UserId.user_id;
        const title=blog.title;
        const content=blog.content;
        axios.post("https://blog-frontend-66kd.onrender.com/add_blog",{user_id:user_id,title:title,content:content}).then((res)=>
        {
            alert(res.data.msg);
        })
        console.log(blog);
    }
    return (

        <form className='container form'>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input type="text" className="form-control shadow" id="exampleFormControlInput1" placeholder="Enter Eye catching Title" rows={3} name='title' value={blog.title} onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea className="form-control shadow" id="exampleFormControlTextarea1" rows={10} name='content' value={blog.content} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={submit}>Submit</button>
      </form>
    )
}

export default AddBlogs