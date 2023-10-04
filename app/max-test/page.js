"use client"
import { useState } from "react"

import AddPost from '../components/AddPosts/AddPost'
import TestPost from "../components/max-test-components/testPost"

export default function Home() {


  const [allPosts, setAllPosts] = useState([])

  const addPostHandler = (post) => {
    setAllPosts([...allPosts, post])
    console.log("hello")

    // add localstore bit
    localStorage.setItem("allPosts", JSON.stringify([...allPosts, post]))
  }


  return (
    <main>
    <h1>The basic page...</h1>

    <div>
      {allPosts.map(post => {
        return (
          <TestPost 
            name={post.name}
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
    </main>
  )
}
