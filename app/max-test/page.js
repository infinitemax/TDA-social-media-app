"use client"
import { useEffect, useState } from "react"
import AddPost from '../components/AddPosts/AddPost'
import TestPost from "../components/max-test-components/TestPost"
import Footer from "../components/Footer/Footer"
import AddPostsSmall from "../components/AddPosts/AddPostsSmall"
import PopUp from "../components/AddPosts/PopUp"

export default function Home() {


  const [allPosts, setAllPosts] = useState([])

  const addPostHandler = (post) => {

    const allFields = post.title && post.content && post.image && post.name

    if (!allFields) {
      alert("Fill out all fields")
    } else {
      setAllPosts([...allPosts, post])
      // add localstore bit
      localStorage.setItem("allPosts", JSON.stringify([...allPosts, post]))
    }

  }

  useEffect(() => {
    setAllPosts(JSON.parse(localStorage.getItem("allPosts")) || []);
  }, []);

  return (
    <>
    <main className="flex min-h-screen flex-col items-center">
    <h1>The basic page...</h1>

    <div className="flex gap-4 flex-wrap p-4">
      {allPosts.map(post => {

        return (
          <TestPost 
            {...post}
            key={post.id}
          /> 
        )
      })}
    </div>

  


    <AddPost 
      addPostInParent={
        (post) => {
          addPostHandler(post);
        }
      }
    />

    {/* <AddPostsSmall 
        addPostInParent={
        (post) => {
          addPostHandler(post);
        }
      }
    /> */}

    <PopUp 
      addPostInParent={
        (post) => {
          addPostHandler(post);
        }
      }
    />

    <Footer />
    </main>
    </>
  )
}
