import React from "react";

export default function Header() {
  return (
    <header className="bg-white flex justify-center mt-5 shadow-md mb-5">
      <img
        className="w-6/12 object-contain mb-5  h-20"
        alt="logo"
        src="https://res.cloudinary.com/evergreenx/image/upload/v1622120124/hackernews_1_w80fmi.svg"
      />
    </header>
  );
}
