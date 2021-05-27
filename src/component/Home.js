import React from "react";
import { Card } from "./Card";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-5 flex-grow">
        <div class="flex justify-start">
          <button className="mr-5 rounded-full bg-primary font-bold py-1 text-base px-6 focus:outline-none">
            New
          </button>

          <button className="rounded-full bg-secondary py-1 text-lg font-bold px-6 border-none outline-none focus:outline-none">
            Past
          </button>
        </div>



        <Card header={'Lorem Ipsum is simply dummy text.'}
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eum quo reprehenderit ipsum ipsa dolores assumenda consectetur quis soluta necessitatibus in dicta consequuntur maiores odit dolorum ad inventore, labore omnis.'}
        
        />


<Card header={'Lorem Ipsum is simply dummy text.'}
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eum quo reprehenderit ipsum ipsa dolores assumenda consectetur quis soluta necessitatibus in dicta consequuntur maiores odit dolorum ad inventore, labore omnis.'}
        
        />

<Card header={'Lorem Ipsum is simply dummy text.'}
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eum quo reprehenderit ipsum ipsa dolores assumenda consectetur quis soluta necessitatibus in dicta consequuntur maiores odit dolorum ad inventore, labore omnis.'}
        
        />


        
      </div>

      <Footer/>
    </>
  );
}
