"use client";

// a component that allows a user to add a post.

import { useState } from "react";
import React from "react";

const AddPost = ({addPostInParent}) => {
  const [newPostObject, setNewPostObject] = useState({
    id: 0,
    title: "",
    content: "",
    image: "",
    name: "",
    likes: 0,
  });

  return (
    <div className="bg-slate-200 rounded-md w-96 px-6 py-4 m-2 border-2 border-slate-300">
      <h2 className="text-3xl text-slate-700 mb-4">COMPOSE</h2>
      <form className="flex flex-col items-center" onSubmit={(event) => {
        event.preventDefault();
        console.log(newPostObject)
        addPostInParent({...newPostObject, id: Math.floor(Math.random() * 1000)});
        setNewPostObject({id: "", title: "", content: "", name: "", likes: ""})
      }}>
        <input
          type="text"
          placeholder="Post title"
          className="p-2 rounded-md my-2 w-full border-2 border-slate-300"
          onChange={(event) => {
            setNewPostObject({
              ...newPostObject,
              title: event.target.value
            })
          }}
          value={newPostObject.title}
        ></input>
        <input
          type="text"
          placeholder="Your name"
          className="p-2 rounded-md my-2 w-full border-2 border-slate-300"
          onChange={(event) => {
            setNewPostObject({
              ...newPostObject,
              name: event.target.value
            })
          }}
          value={newPostObject.name}
        ></input>
        <textarea
          type="text"
          rows="5"
          placeholder="Your post"
          className="p-2 rounded-md my-2 w-full border-2 border-slate-300"
          onChange={(event) => {
            setNewPostObject({
              ...newPostObject,
              content: event.target.value
            })
          }}
          value={newPostObject.content}
        ></textarea>
        <input
          type="text"
          placeholder="Image url"
          className="p-2 rounded-md my-2 w-full border-2 border-slate-300"
          onChange={(event) => {
            setNewPostObject({
              ...newPostObject,
              image: event.target.value
            })
          }}
          value={newPostObject.image}
        >

        </input>
        <button className="bg-slate-300 rounded-md py-2 px-4 mt-6 text-lg  border-2 border-slate-400 text-slate-900">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default AddPost;
