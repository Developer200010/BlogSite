import React, { useEffect, useState } from "react";
import "./index.css";
import Card from "../../../Cards/Card";
import Footer from "../../Footer";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const {search} = useLocation();
  useEffect(()=>{
    const fetch = async() =>{
      const res = await axios.get("/api/posts" + search);
      const cat = await axios.get("/api/category");
      // console.log(cat.data)
      setCats(cat.data);
      setPosts(res.data);
      // console.log(res.data)
    }
    fetch();
  }, [])
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex w-full justify-between py-3 px-3">
          <div className="mt-3">
            <h4>Username: </h4>
            <h3>No of Post: </h3>
          </div>
          <div className="mid-content">
            <h2>Welcome back ✌️</h2>
          </div>
          <div>
            <a href="/user/upload"><button class="button">Add</button></a>
          </div>
        </div>
        <section>{/* <Categories/> */}</section>
        <hr />
        <div className="mb-5 mt-6"> 
          <label className="mt-3 flex justify-center p-5 text-2xl">Blogs</label>
          <h6 className="px-2 py-2 text-red-600">Categories</h6>
          <div className="w-92 h-10 flex justify-center items-center mb-4 gap-6 m-3">
            {cats.map((c)=>(
              <Link to={`/user/home?cat=${c.name}`}>
              <span className="text-lg bg-blue-400 px-1 py-1 rounded-xl w-24 text-center cursor-pointer">{c.name}</span>
              </Link>
            ))}
            
          </div>
          <section>
            {
              posts.map((p)=>(
                <Card post={p}/>
              ))
            }
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
