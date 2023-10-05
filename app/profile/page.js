"use client";
import { useState } from "react";

export default function Profile() {
  const user = {
    id: "",
    name: "USERNAME",
    picture: "https://media.tenor.com/WX8OXgN5VpMAAAAi/waving-wave-hello.gif",
    posts: [
      {
        id: "1",
        type: "Item",
        attributes: {
          title: "First post",
          description: "OMG THIS IS MY FIRST POST",
          image: "https://media.tenor.com/7SI7s743NmoAAAAC/evil-evil-laugh.gif",
        },
      },
      {
        id: "2",
        type: "Item",
        attributes: {
          title: "Second post",
          description: "OMG THIS IS MY SECOND POST",
          image: "https://media.tenor.com/9fBgVWrDYs0AAAAi/run-busy.gif",
        },
      },
      {
        id: "3",
        type: "Item",
        attributes: {
          title: "Third post",
          description: "OMG THIS IS MY Third POST",
          image:
            "https://i.pinimg.com/originals/da/b8/e4/dab8e4a138086559babe755c745f0fb1.jpg",
        },
      },
      {
        id: "4",
        type: "Item",
        attributes: {
          title: "Fourth post",
          description:
            "OMG THIS IS A REALLY LONG DESCRIPTION OMG THIS IS A REALLY LONG DESCRIPTION",
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        },
      },
    ],
  };

  return (
    <section className="p-2 h-screen bg-blue-300">
      <div className="flex justify-center m-[5%] font-semibold">
        <h1>{user.name}</h1>
      </div>
      <div className="flex flex-row justify-between h-[10%] mx-[5%] text-sm font-semibold text-center">
        <img className="h-[4rem]" src={user.picture} />
        <ul>
          <li>Posts</li>
          <li>{user.posts.length}</li>
        </ul>
      </div>
      <div className="m-[5%] grid grid-cols-1 gap-[4%] sm:grid-cols-2 xl:grid-cols-4 text-center items-center items-middle">
        {user.posts.map((posts) => {
          return (
              <div class="relative border-4 border-white rounded-2xl h-60 w-60 xl:h-96 xl:w-96">
                {posts.attributes.image && (
                  <div className="flex justify-center h-full w-full">
                    <img
                      src={posts.attributes.image}
                      className="rounded-xl object-cover"
                    />
                  </div>
                )}
                <div
                  class="overlay absolute inset-0 bg-black bg-opacity-50 text-white 
          opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300 flex 
          flex-col justify-center items-center"
                >
                  <h3 class="text-xl font-bold mb-2">
                    {posts.attributes.title}
                  </h3>
                  <p>{posts.attributes.description}</p>
                </div>
              </div>
          );
        })}
      </div>
    </section>
  );
}
