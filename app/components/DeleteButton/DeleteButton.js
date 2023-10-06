import React from "react";
import { useState } from "react";

const DeleteButton = (post, deleteIt) => {

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



  return (
    <div>
      <button
        className="py-2 px-4 rounded-md bg-slate-300 border-2 border-slate-400 w-12 mx-auto text-center"
        onClick={() => deleteIt(post)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  );
};

export default DeleteButton;
