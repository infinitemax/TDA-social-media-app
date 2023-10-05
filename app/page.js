import Image from 'next/image'

import Post from "./components/the-post/Post"  

export default function Home() {
  return (
    <main className="h-screen w-screen">
    <h1>hello</h1>
    <Post
      name = "user"
      image = "image"
      content = "hello"
      title = "title"
      likes = {0}
      />
    </main>
  )
}
