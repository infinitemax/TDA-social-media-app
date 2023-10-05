"use client";

export default function Post({ name, title, content, image, likes }) {
  return (
    <div className="bg-red-500 w-48">
      <h2 className="">{name}</h2>
      <img className="" src={image} />
      <h3 className="">{title}</h3>
      <p className="">{content}</p>
      <p className="">{likes}</p>
    </div>
  );
}
