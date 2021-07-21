import React, { useState } from "react";
import { Card } from "./Card";
import Footer from "./Footer";
import Header from "./Header";

export default function Home({ data, loading }) {
  const loadMoreNews = () => {
    setState((prev) => prev + 2);
  };
  const [state, setState] = useState(2);

  return (
    <>
      <Header />

      <section className="container mx-auto px-4 py-5 flex-grow">
        <div className="flex justify-start">
          <button className="mr-5 rounded-full bg-primary font-bold py-1 text-base px-6 focus:outline-none">
            New
          </button>

          <button className="rounded-full bg-secondary py-1 text-lg font-bold px-6 border-none outline-none focus:outline-none">
            Past
          </button>
        </div>

        {loading ? (
          <div className=" px-4 py-10 animate animate-pulse rounded-xl relative shadow-lg mt-8 w-80 sm:w-full md:w-full bg-white flex justify-center">
            <h1 className="text-4xl">Fetching News</h1>
          </div>
        ) : (
          data
            .slice(0, state)
            .map((i) => (
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
            ))
        )}
      </section>

      {loading ? null : (
        <div className="container flex justify-center">
          <button
            className="bg-primary text-center rounded-xl text-base  font-bold   px-28 py-3"
            onClick={loadMoreNews}
          >
            Load More
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
