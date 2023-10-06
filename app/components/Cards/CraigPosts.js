import React from 'react'

const CraigPosts = ({name, picture, title, image, content}) => {
  return (
    <div className=" mt-5 w-full flex justify-center flex-wrap gap-4 text-center items-middle">

          <div className="relative border-4 border-white rounded-2xl h-40 w-40 sm:h-60 sm:w-60 md:h-96 md:w-96">
              <div className="flex justify-center h-full w-full">
                <img
                  src={image}
                  className="rounded-xl object-cover"
                />
              </div>
            <div
              className="overlay absolute inset-0 bg-black bg-opacity-50 text-white 
      opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300 flex 
      flex-col justify-center items-center"
            >
              <h3 className="text-xl font-bold mb-2">
                {title}
              </h3>
              <p>{content}</p>
            </div>
          </div>
  </div>
  )
}

export default CraigPosts