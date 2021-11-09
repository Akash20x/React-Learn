import { Component, useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  // Calling useFetch function by passing value and return 3 things
  // we get data but we call it blogs in this component
  // We created a custom Hook

  const { error, isPending, data: blogs } = useFetch('http://localhost:8001/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;