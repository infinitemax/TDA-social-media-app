"use client"
import React from "react";
import Link from "next/link";
import PopUp from "../AddPosts/PopUp";
import { useState } from "react";

const Navbar = () => {


  const [allPosts, setAllPosts] = useState([])

  const addPostHandler = (post) => {
  
      setAllPosts([...allPosts, post])
      
      // add localstore bit
      localStorage.setItem("allPosts", JSON.stringify([...allPosts, post]))
    

  }


  return (
    <div className="fixed w-full p-2 bg-blue-400 z-20">
      <ul className="flex justify-between items-center mx-6 sm:mx-16 md:mx-32">
        <li>
          <Link className="font-semibold" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="font-semibold" href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <div>
            {/* <Link href="/addpost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 448 512"
              >
                <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
            </Link> */}
            <PopUp
              addPostInParent={(post) => {
                addPostHandler(post);
              }}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
