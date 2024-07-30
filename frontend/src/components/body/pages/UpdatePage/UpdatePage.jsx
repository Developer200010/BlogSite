import React from "react";

const UpdatePage = () => {
  return (
    <>
      <div className="w-full h-screen bg-slate-300 px-3 py-4 ">
        <div className="flex justify-center ">
          <form
            action=""
            className="flex flex-col justify-center items-center mt-6"
          >
            <label htmlFor="">Uplaod img</label>
            <input type="file" name="" id="" className="bg-blue-400 mt-2" />
            <label htmlFor="" className="text-lg mt-3">
              Title
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-96 h-9 mb-5 outline-none mt-2 rounded-md px-3 py-3"
              placeholder="Enter title"
            />
            <label htmlFor="" className="text-lg">In you Mind?</label>
            <textarea
              rows="4"
              cols="85"
              name="content"
              id=""
              className="outline-none mt-2 px-3 py-3 rounded-sm"
            >
              In you mind?
            </textarea>
           <a href="/user/home"><button className="mt-3 bg-blue-500 rounded-md h-10 w-32">Update</button></a> 
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
