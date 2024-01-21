import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

function Blogs(props) {
    function Reload() {
        const user_id = props.UserId.user_id;

        axios.post("https://blog-frontend-66kd.onrender.com/show_blog", { user_id: user_id }).then((res1) => {
            // console.log("hello world "+JSON.stringify(res1.data));
            props.setBlogs(res1.data);
        });
    }
    useEffect(() => {
        Reload();
    })
    function showblog(e, title, content) {
        e.preventDefault();
        props.setcurblog({ title: title, content: content });
        Navigate("/showblog");
    }
    function del(e,title,content){
        const user_id=props.UserId.user_id;
        axios.post("https://blog-frontend-66kd.onrender.com/delete_blog",{user_id:user_id,title:title,content:content}).then((res)=>
        {
            alert(res.data.msg);
            Reload();
        })

    }
    const Navigate = useNavigate();
    return (
        // blogs-container shadow bg-white-rounded row

        <div className="blogs shadow bg-white-rounded">

            <div className="row blog-container">

                {props.BBlogs.map((blog, index) => (
                    <div key={index} className="col-5 blog shadow bg-white-rounded">
                        <h3 className="title">{blog.title}</h3>
                        <p className="content">{blog.content.substr(0, 200).concat("........")}</p>
                        <button className='btn btn-primary' onClick={(e) => showblog(e, blog.title, blog.content)}>show more</button>
                        <button className="btn btn-danger ml-3" onClick={(e) => del(e, blog.title, blog.content)}>Delete</button>
                    </div>
                ))}
            </div>
            <Link to="/addblogs">
                <button type="button" className="btn btn-primary add-btn btn-lg">
                    Write more Blogs
                </button>
            </Link>



        </div>
    )
}

export default Blogs