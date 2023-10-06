"use client";
import { useState, useEffect } from "react";
import CraigPosts from "../components/Cards/CraigPosts";
import PopUp from "../components/AddPosts/PopUp";
import DeleteButton from "../components/DeleteButton/DeleteButton";


export default function Profile() {
 

  const [allPosts, setAllPosts] = useState([])


  const addPostHandler = (post) => {
  
      setAllPosts([...allPosts, post])
      
      // add localstore bit
      localStorage.setItem("allPosts", JSON.stringify([...allPosts, post]))

  }

 

  useEffect(() => {
    setAllPosts(JSON.parse(localStorage.getItem("allPosts")) || []);
  }, [])

  return (
    <section className="p-2 min-h-screen w-screen bg-blue-300 pt-20 sm:pt-20 md:pt-10">


        <div className="mt-5 w-full flex justify-center flex-wrap gap-4 text-center items-middle">
            {allPosts?.map((post) => {
              return <CraigPosts 
                {...post} 
                key={post.id}
                deleteIt={(name) => {
                  deletePost(name);
                }}
              />;
            })}
              </div>


  

      <PopUp
              addPostInParent={(post) => {
                addPostHandler(post);
              }}
            />
    </section>
  );
}
