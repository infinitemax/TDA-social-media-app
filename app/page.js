import Image from "next/image";

import Post from "./components/the-post/Post";
import TestPost from "./components/max-test-components/TestPost";

export default function Home() {
  return (
    <main className="p-2 min-h-screen w-screen bg-blue-300 pt-20 sm:pt-20 md:pt-10">
      <div className="h-screen w-screen flex items-center flex-col">
        <h1 className="text-4xl mt-12">Welcome to the best social media app in town!</h1>
        <h2 className="mt-12 text-2xl">Click <a href="/profile">"profile"</a> so see your posts....</h2>


      </div>
    </main>
  );
}
