import { useEffect, useState } from "react";
import BlogList from "./BlogList";

// In this we added a loading variable and we check using isPending
// setTimeout 1000 to add a extra time of 1 sec for the useEffect function
// Loading is visible till isPending true
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8001/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
