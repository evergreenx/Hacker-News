import React from "react";
import { Card } from "./Card";
import Footer from "./Footer";
import Header from "./Header";

export default function Home({ data }) {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-5 flex-grow">
        <div className="flex justify-start">
          <button className="mr-5 rounded-full bg-primary font-bold py-1 text-base px-6 focus:outline-none">
            New
          </button>

          <button className="rounded-full bg-secondary py-1 text-lg font-bold px-6 border-none outline-none focus:outline-none">
            Past
          </button>
        </div>

        {data.map((i) => (
          <Card
            header={i.data.title}
            key={i.data.id}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eum quo reprehenderit ipsum ipsa dolores assumenda consectetur quis soluta necessitatibus in dicta consequuntur maiores odit dolorum ad inventore, labore omnis."
            }
            url={i.data.url}
            time={i.data.time}
            kids={i.data.kids}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
