import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();   // useParams for accessing variables like id mentioned
                               //  in the path of BlogDetails Component
  return (
    <div className="blog-details">
      <h2>Blog details - { id }</h2>
    </div>
  );
}
 
export default BlogDetails;