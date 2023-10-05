'use client'
import { useState } from "react";


const Post = ({name, title, content, image, likes}) => {

<div>
    <h2 className="">{name}</h2>
    <img className="" src={image}/>
    <h3 className="">{title}</h3>
    <p className="">{content}</p>
    <p className="">{likes}</p>
</div>
}



