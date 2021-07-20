import React, { useEffect, useState } from "react";
import Home from "./component/Home";
import axios from "axios";

function App() {
  const [storiesFromApi, setStoriesFromAp] = useState([]);

  const [loading, setLoading] = useState(true);

  let BASE_API_URL = "https://hacker-news.firebaseio.com/v0";

  const getStory = async (id) => {
    try {
      const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
      return story;
    } catch (error) {
      console.log("Error while getting a story.");
    }
  };

  const getStories = async () => {
    try {
      const { data: storyIds } = await axios.get(
        `${BASE_API_URL}/${"new"}stories.json?print=pretty`
      );
      const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));

      setLoading(false);
      console.log(stories);
      setStoriesFromAp(stories);
    } catch (error) {
      console.log("Error while getting list of stories.");
    }
  };
  useEffect(() => {
    getStories();
  }, []);
  return (
    <div className="App w-full flex flex-col min-h-screen">
      <Home data={storiesFromApi} loading={loading} />
    </div>
  );
}

export default App;
