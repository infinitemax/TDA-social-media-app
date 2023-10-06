"use client"
import { useEffect, useState } from "react"
import AddPost from '../components/AddPosts/AddPost'
import TestPost from "../components/max-test-components/TestPost"
import Footer from "../components/Footer/Footer"
import Post from "../components/the-post/Post"
import PopUp from "../components/AddPosts/PopUp"


export default function Home() {


  const [allPosts, setAllPosts] = useState([])


  const addPostHandler = (post) => {
  
      setAllPosts([...allPosts, post])
      
      // add localstore bit
      localStorage.setItem("allPosts", JSON.stringify([...allPosts, post]))

  }

// delete a post

const [deletion, setDeletion] = useState(null);

const deletePost = (postToDelete) => {
  // find index of movie to delete
  // this line of code uses map to create an array of the names of each object in movies array
  // then it applies indexOf to find the index of the movie, which we can
  // use to delete the item from the main array.
  let indexToDelete = allPosts
    .map((item) => item.title)
    .indexOf(postToDelete);

  console.log(`we are about to delete ${allPosts[indexToDelete].name}`)
  
  allPosts.splice(indexToDelete, 1);

  // // use setMovies to pass the movie array back

  setAllPosts([...allPosts]);

  localStorage.setItem("allPosts", JSON.stringify([...allPosts]))

  // display deletion message
  setDeletion('Entry has been deleted');
  setTimeout(() => {
    setDeletion(null)
  }, 2000)
};

useEffect(() => {
  setAllPosts(JSON.parse(localStorage.getItem("allPosts")) || []);
}, []);

  return (
    <>
    <main className="flex min-h-screen flex-col items-center pt-24 bg-slate-100">
    <h1 className="text-2xl">My Feed</h1>

    <div className="flex gap-4 flex-wrap p-4 justify-center">
      {allPosts.map(post => {

        return (
          <TestPost 
            {...post}
            key={post.id}
            deleteIt={(name) => {
              deletePost(name);
            }}
          /> 
        )
      })}
    </div>

  


    {/* <AddPost 
      addPostInParent={
        (post) => {
          addPostHandler(post);
        }
      }
    /> */}

    {/* <AddPostsSmall 
        addPostInParent={
        (post) => {
          addPostHandler(post);
        }
      }
    /> */}

    {/* <PopUp 
      addPostInParent={
        (post) => {
          addPostHandler(post);
        }
      }
    /> */}

    <PopUp
              addPostInParent={(post) => {
                addPostHandler(post);
              }}
            />

    </main>
    <Footer />
    </>
  )
}
