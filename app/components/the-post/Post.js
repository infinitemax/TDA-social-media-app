"use client";

export default function Post

({name, title, content, image, likes}) {


<div className="bg-blue-200 h-screen w-screen flex-col justify-center items-center">
    <h2 className="text-left p-3 font-bold justify-center items-center font-serif">{name}</h2>
    <img className="border-2 rounded-2xl border-gray-700 m-3 h-10 w-10 justify-center items-center" src={image}/>
    <h3 className="text-left m-3 font-bold justify-center items-center font-serif">{title}</h3>
    <p className="font-semibold bg-grey-100 m-3 border-2 rounded-xl justify-center items-center font-serif">{content}</p>
    <p className="text-sm text-right font-bold text-blue-700 justify-center items-center font-serif">{likes}</p>
</div>

}