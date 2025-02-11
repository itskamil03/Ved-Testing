import "./BlogsHero.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlogsHero() {
  return (
    <>
      <div id="blogs"> 
        <div className="blog-hero-contain">
          <div className="image">
            <LazyLoadImage
              src="backgrounds/bread-bg.jpg" 
              alt="Hero-Image" 
              className="blogsheroimg-img w-100 h-100" 
                 loading="lazy"
            />
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="title">Blog </div>
              <div className="blogs-button">
                {/* <Link to="/">All</Link>
                <Link to="/">Custom Software Development</Link>
                <Link to="/">Mobile Development</Link> */}
                <br />
                {/* <Link to="/">Blogs</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">Blogs</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsHero;
