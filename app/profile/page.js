"use client";
import { useState, useEffect } from "react";
import CraigPosts from "../components/Cards/CraigPosts";


export default function Profile() {
  // const user = {
  //   id: "",
  //   name: "USERNAME",
  //   picture: "https://media.tenor.com/WX8OXgN5VpMAAAAi/waving-wave-hello.gif",
  //   posts: [
  //     {
  //       id: "1",
  //       type: "Item",
  //       attributes: {
  //         title: "First post",
  //         description: "OMG THIS IS MY FIRST POST",
  //         image: "https://media.tenor.com/7SI7s743NmoAAAAC/evil-evil-laugh.gif",
  //       },
  //     },
  //     {
  //       id: "2",
  //       type: "Item",
  //       attributes: {
  //         title: "Second post",
  //         description: "OMG THIS IS MY SECOND POST",
  //         image: "https://media.tenor.com/9fBgVWrDYs0AAAAi/run-busy.gif",
  //       },
  //     },
  //     {
  //       id: "3",
  //       type: "Item",
  //       attributes: {
  //         title: "Third post",
  //         description: "OMG THIS IS MY Third POST",
  //         image:
  //           "https://i.pinimg.com/originals/da/b8/e4/dab8e4a138086559babe755c745f0fb1.jpg",
  //       },
  //     },
  //     {
  //       id: "4",
  //       type: "Item",
  //       attributes: {
  //         title: "Fourth post",
  //         description:
  //           "OMG THIS IS A REALLY LONG DESCRIPTION OMG THIS IS A REALLY LONG DESCRIPTION",
  //         image:
  //           "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  //       },
  //     }
  //   ],
  // };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("allPosts")) || []);
  }, [])

  return (
    <section className="p-2 h-full w-screen bg-blue-300 pt-20 sm:pt-20 md:pt-10">
      {/* <div className="flex justify-center mt-6 md:mt-16 mb-8 font-semibold">
        <h1>{user.name}</h1> {console.log(user)}
      </div>
      <div className="flex flex-row items-center justify-between h-[10%] mx-10 sm:mx-40 md:mx-64 xl:mx-96 text-sm font-semibold text-center">
        <img className="h-[4rem]" src={user.picture} />
        <ul>
          <li>Posts</li>
          <li>{user.posts.length}</li> 
        </ul>
      </div> */}
      <div className="flex flex-wrap gap-4">
          {posts?.map((post) => {
            return <CraigPosts {...post} key={post.id} />;
          })}
        </div>
      {/* <div className=" mt-5 w-full flex justify-center flex-wrap gap-4 text-center items-middle">
        {user.posts.map((posts) => {
          return (
              <div className="relative border-4 border-white rounded-2xl h-40 w-40 sm:h-60 sm:w-60 md:h-96 md:w-96">
                {posts.attributes.image && (
                  <div className="flex justify-center h-full w-full">
                    <img
                      src={posts.attributes.image}
                      className="rounded-xl object-cover"
                    />
                  </div>
                )}
                <div
                  className="overlay absolute inset-0 bg-black bg-opacity-50 text-white 
          opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300 flex 
          flex-col justify-center items-center"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {posts.attributes.title}
                  </h3>
                  <p>{posts.attributes.description}</p>
                </div>
              </div>
          );
        })}
      </div> */}
    </section>
  );
}
