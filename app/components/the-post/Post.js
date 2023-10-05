'use client'

export default function Post

({name, title, content, image, likes}) {


<div className="bg-blue-300 h-screen w-screen flex flex-col justify-center">
    <h2 className="m-3 font-bold">{name}</h2>
    <img className="m-3 rounded-2xl h-10 w-10" src={image}/>
    <h3 className="font-">{title}</h3>
    <p className="">{content}</p>
    <p className="">{likes}</p>
</div>
}
