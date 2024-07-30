import React, { useEffect, useState } from "react";
import './SinglePage.css'
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const SinglePage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(()=>{
    const fetch = async() =>{
      const res = await axios.get('/api/posts/' + path);
      setData(res.data);
    }
    fetch();
  })
  return (
    <>
      <div className="w-full min-h-full bg-slate-400 flex flex-col justify-center items-center">
      <div className="mt-6">Title: {data.title}</div>
        <div className="px-3 py-3">
          <img
            src="https://images.pexels.com/photos/210459/pexels-photo-210459.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-md mb-2 w-full h-full object-contain object-cover "
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="flex justify-between gap-80">
          <div>
            <Link to ={`/user/home?user=${data.username}`}>
           <button className="bg-blue-500 px-2 py-2 rounded-lg cursor-pointer">posts</button>
           </Link>
          </div>
          <div>
            <button>
              <b>edit</b>
            </button>
          </div>
        </div>
        <hr />
        <div className="px-4 py-4 m-5 text-2xl">
          content: {data.desc}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
