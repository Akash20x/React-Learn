import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

// for json server install npm i json-server 
//  The below url is created using this command
//  npx json-server --watch data/db.json --port 8001
//  specify data location and diff port no and we fetch data
// we store in json format and passed to then
// now we update from blog null value to all blogs using setBlogs

  useEffect(() => {
    fetch('http://localhost:8001/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])
  
  return (
    <div className="home">

    {/* Conditional templating in react 
    we put a condition for a component to run */}

      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
