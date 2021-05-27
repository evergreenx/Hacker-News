import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-5 flex-grow">
        <div class="flex justify-start">
          <button className="mx-5 rounded-full bg-primary font-bold py-1 text-base px-6 focus:outline-none">
            New
          </button>

          <button className="rounded-full bg-secondary py-1 text-lg font-bold px-6 border-none outline-none focus:outline-none">
            Past
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
}
