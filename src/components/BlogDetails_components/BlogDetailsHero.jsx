import "./BlogDetailsHero.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlogDetailsHero() {
  return (
    <>
      <div id="blogs">
        <div className="blog-hero-contain">
          <div className="image">
            <LazyLoadImage
              src="/backgrounds/banner_blog.jpg"
              alt="Hero-Image"
              className="blogsheroimg-img w-100 h-100"
                 loading="lazy"
            />
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="title">Blog Details</div>
              <div className="blogs-button">
                {/* <Link to="/Blogs"># All</Link>
                <Link to="/BlogDetails"># Custom Software Development</Link>
                <Link to="/BlogDetails"># Mobile Development</Link> */}
                <br />
                <Link to="/Blogs">Blogs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsHero;
