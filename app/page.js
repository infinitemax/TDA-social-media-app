import Image from "next/image";

import Post from "./components/the-post/Post";
import TestPost from "./components/max-test-components/TestPost";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen">
        <h1 className="pt-24">hello</h1>
        <Post
          name="user"
          image="image"
          content="hello"
          title="title"
          likes="0"
        />

        <TestPost 
          title="test"
          name="test"
          content="test test test"
          likes="0"
        />


      </div>
    </main>
  );
}
