import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import AddBlogs from "./Components/AddBlogs";
import ShowBlog from "./Components/ShowBlog";
import { useState } from "react";
import "./App.css"
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
function App() {
  const [UserId,setUserId]=useState({user_id:null});
  const [BBlogs,setBlogs]=useState([]);
  const [curblog,setcurblog]=useState({title:"",content:""});
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login UserId={UserId} setUserId={setUserId} BBlogs={BBlogs} setBlogs={setBlogs}/>} />
      <Route path="/registration" element={<Registration UserId={UserId} setUserId={setUserId} BBlogs={BBlogs} setBlogs={setBlogs}/>} />
      <Route path="/home" element={<Home UserId={UserId} setUserId={setUserId} BBlogs={BBlogs} setBlogs={setBlogs}/>}  />
      <Route path="/blogs" element={<Blogs UserId={UserId} setUserId={setUserId} BBlogs={BBlogs} setBlogs={setBlogs} curblog={curblog} setcurblog={setcurblog}/>}  />
      <Route path="/addblogs" element={<AddBlogs UserId={UserId} setUserId={setUserId} BBlogs={BBlogs} setBlogs={setBlogs} curblog={curblog} setcurblog={setcurblog}/>}  />
      <Route path="/showblog" element={<ShowBlog UserId={UserId} setUserId={setUserId} BBlogs={BBlogs} setBlogs={setBlogs}  curblog={curblog} setcurblog={setcurblog}/>}  />
     
    </Routes>
</BrowserRouter>
  );
}

export default App;
