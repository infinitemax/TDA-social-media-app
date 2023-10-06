import React from 'react'

const CraigPosts = ({name, title, image, content, likes, deleteIt}) => {
  return (
    <div className="relative border-4 border-white rounded-2xl h-40 w-40 sm:h-60 sm:w-60 md:h-96 md:w-96">
              <div className="flex justify-center h-full w-full">
                <img
                  src={image}
                  className="rounded-xl object-cover"
                />
                 <div
              className="overlay absolute inset-0 bg-black bg-opacity-50 text-white 
      opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300 flex 
      flex-col justify-center items-center"
            >
              <h3 className="text-xl font-bold mb-2">
                {title}
              </h3>
              <p>{content}</p>
              <button className='py-2 px-4 rounded-md bg-slate-300 border-2 border-slate-400 w-12 mx-auto text-center relative top-28'
          onClick={() => deleteIt(title)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
            </div>
           </div>
           </div>
  )
}

export default CraigPosts