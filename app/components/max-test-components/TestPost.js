"use client"

import React from 'react'
import { useState } from 'react'



const TestPost = ({title, name, content, likes, image, deleteIt}) => {
  const [like, setLike] = useState(false)
  
  

  
  return (
    

    <div className='bg-slate-200 rounded-md m-2 flex flex-col w-96 px-4 py-4 border-4 border-slate-300'>
      <h2 className='font-bold text-xl'>{title}</h2>
      <p><i>{name}</i></p>
      <img src={image}/>
      <p className='pt-2'>"{content}"</p>
      <p>{likes} likes</p>

      <div className='flex justify-between'>
      <button className='py-2 px-4 rounded-md bg-slate-300 border-2 border-slate-400 w-24 mx-auto'
          >like</button>
        <button className='py-2 px-4 rounded-md bg-slate-300 border-2 border-slate-400 w-24 mx-auto'
          onClick={() => deleteIt(title)}>delete</button>
        
      </div>
    </div>



  )
}

export default TestPost