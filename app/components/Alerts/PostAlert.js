import React from 'react'

const PostAlert = ({message}) => {
  return (
    <div className='bg-green-500 absolute top-[275px] w-36 text-center rounded-md h-[82px]'>
        <p>{message}</p>
    </div>
  )
}

export default PostAlert