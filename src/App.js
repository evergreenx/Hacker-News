import React, { useEffect, useState } from "react";
import Home from "./component/Home";
import axios from "axios";

function App() {
  const [stories, setStories] = useState([]);

  let BASE_API_URL = "https://hacker-news.firebaseio.com/v0";
  // const getStory = async () => {
  //   let data = await axios.get(
  //     "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  //   );

  //   let res = data.data;

  //   let d = res.slice(0, 10).map((i) => {setStories(i);
  //   });
  //   console.log(stories, "check");

  //   // console.log(stories);
  // };

  const getStory = async (id) => {
    try {
      const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
      return story;
    } catch (error) {
      console.log("Error while getting a story.");
    }
  };

  // const getStories = async () => {
  //   let data = await axios.get(
  //     "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
  //   );

  //   console.log(data);
  // };

  const getStories = async () => {
    try {
      const { data: storyIds } = await axios.get(
        `${BASE_API_URL}/${"new"}stories.json`
      );
      const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
      // setStories(stories);
      // const data = stories.data;
      // return stories;
      console.log(stories.data);

      
    } catch (error) {
      console.log("Error while getting list of stories.");
    }
  };
  // useEffect(() => {
  //   getStory();
  //   getStories();
  // }, []);
  return (
    <div className="App w-full flex flex-col min-h-screen">
      <button className="bg-black text-white text-2xl" onClick={getStories}>
        Get Stories
      </button>
      <Home />

      {stories.map((i) => (
        <h1>{i.title}</h1>
      ))}
    </div>
  );
}

export default App;
