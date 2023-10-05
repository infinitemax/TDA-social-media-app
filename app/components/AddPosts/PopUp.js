//tried to add a pop up, not sure it will succeed!

import React from 'react'
import { useState } from "react"
import AddPostsSmall from "./AddPostsSmall"

const PopUp = ({addPostInParent}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }

  return (
    <div className='App'>
        {isOpen && <AddPostsSmall
            addPost={(post) => {
                addPostHandler(post);
            }} />}
        <button className='bg-slate-400 p-4 rounded-md' onClick={toggle}>Compose?</button>
    </div>
  )
}

export default PopUp