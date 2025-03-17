import "./NewsEvents.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NewsEventsHero() {
  return (
    <>
      <div id="events"> 
        <div className="blog-hero-contain">
          <div className="image">
            <img loading="eager" fetchpriority="high"
              src="backgrounds/news.jpg" 
              alt="Hero-Image" 
              className="blogsheroimg-img w-100 h-100" 
                  
            />
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="title">News & Events</div>
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

export default NewsEventsHero;