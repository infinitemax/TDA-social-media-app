"use client";
import { useState, useEffect } from "react";
import CraigPosts from "../components/Cards/CraigPosts";
import PopUp from "../components/AddPosts/PopUp";


export default function Profile() {
 
  const startingPosts = [
    {
      id: 1,
      title: "Hello World",
      content: "This is my first post!",
      name: "Max",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg",
      likes: 0
    },
    {
      id: 2,
      title: "Hello World",
      content: "Look into my eyes...",
      name: "Max",
      image: "https://hips.hearstapps.com/hmg-prod/images/neva-masquerade-royalty-free-image-1674509896.jpg?crop=0.611xw:1.00xh;0.196xw,0&resize=640:*",
      likes: 0
    },
    {
      id: 3,
      title: "Arty cat",
      content: "This cat knows where it's at",
      name: "Max",
      image: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg",
      likes: 0
    },
    {
      id: 4,
      title: "Surprise!",
      content: "Hi there, I'm a cat",
      name: "Max",
      image: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      likes: 0
    },
    {
      id: 5,
      title: "Purrrrr",
      content: "What a cool looking tabby",
      name: "Max",
      image: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      likes: 0
    }
  ]
console.log('adding posts')

  const [allPosts, setAllPosts] = useState([])


  const addPostHandler = (post) => {
  
      setAllPosts([...allPosts, post])
      
      // add localstore bit
      localStorage.setItem("allPosts", JSON.stringify([...allPosts, post]))

  }

  const [deletion, setDeletion] = useState(null);

  const deletePost = (postToDelete) => {
    setAllPosts(
      allPosts.filter((post) => {
        return post.title !== postToDelete;
      })
    );
      const filtered = allPosts.filter(post => post.title !== postToDelete)
      localStorage.setItem("allPosts", JSON.stringify(filtered))
      setAllPosts(filtered)
  
    // display deletion message
    setDeletion('Entry has been deleted');
    setTimeout(() => {
      setDeletion(null)
    }, 2000)
  };



  console.log('doing use effect')
  
  useEffect(() => {
    // localStorage.setItem("allPosts", JSON.stringify([...allPosts, startingPosts]))
    // setAllPosts(JSON.parse(localStorage.getItem("allPosts")) || []);
    // setAllPosts(JSON.parse(localStorage.getItem("allPosts")) || startingPosts);
    if (localStorage.getItem("allPosts")) {
      setAllPosts(JSON.parse(localStorage.getItem("allPosts")));
    } else {
      setAllPosts(startingPosts);
    }
  }, [])

  // useEffect(() => {
  //   localStorage.setItem("allPosts", JSON.stringify(allPosts))
  // }, [allPosts])


  return (
    <section className="p-2 min-h-screen w-screen bg-blue-300 pt-20 sm:pt-20 md:pt-10">
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

      <PopUp
              addPostInParent={(post) => {
                addPostHandler(post);
              }}
            />
    </section>
  );
}
