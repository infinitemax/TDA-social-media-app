import React from 'react'

const TestPost = ({title, name, content, likes}) => {
  return (
    
// finish this test post later, for now try to get the add post button to add post to local storage.

    <div className='bg-slate-100 rounded-md m-2 flex flex-col w-96'>
      <h2 className='font-bold'>{title}</h2>
      <p><i>{name}</i></p>
      <p>"{content}"</p>
      <p>Likes: {likes}</p>
    </div>



  )
}

export default TestPost