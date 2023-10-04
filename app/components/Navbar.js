import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full p-2 bg-red-500">
      <ul className="flex flex-col">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/addpost">add</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
