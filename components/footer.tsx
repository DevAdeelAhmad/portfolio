import React from "react";
import {AiFillHeart} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center flex flex-col place-items-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Dev Adeel. All rights reserved.
      </small>
      <p className="text-xs flex">
        <span className="font-semibold">Built with </span>&nbsp;
        <AiFillHeart size={15} color="red"/>
      </p>
    </footer>
  );
}
