import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./BlogDetails.css";
import BlogDetailsHero from "../../components/BlogDetails_components/BlogDetailsHero";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlogDetails() {

  const [blogDetail, setBlogDetails] = useState([]);

  const [blogLatest, setBlogLatest] = useState([]);
  const [blogtrends, setBlogTrends] = useState([]);
  const [blogPost, setBlogPost] = useState([]);

  const BlogId=localStorage.getItem("blogId")

  useEffect(() => {
    fetch(`https://ved.venturingdigitally.com/api/blog_details/${BlogId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((resp) => {
        setBlogDetails(resp.data);
        setBlogLatest(resp.latest_two_data)
        setBlogTrends(resp.recent_trends)
        setBlogPost(resp.recent_posts)
      });
  }, []);



  return (
    <div>
      <BlogDetailsHero />

      {/* BLOG SECTION */}
      <div className="blog_container">
        <div className="blog_content" style={{width:"100%"}}>
          <div className="left_content">
            {/* CARD BEGINNING */}
           
              

                  <div className="blog_card">
                  <Link to="/article" className="figure" key={blogDetail.id}>
                    <LazyLoadImage
                    src={`https://ved.venturingdigitally.com/assets/img/blog/${blogDetail.image}`}
                     alt={blogDetail.blog_title}
                     loading="lazy"
                     className="bloges-card-img-img w-100 h-100"
                     
                    />
                    <span className="tag">{blogDetail.tag}</span>
                  </Link>
                  <section>
                    <Link to="#" className="title">
                      {blogDetail.blog_title}
                    </Link>
                    <p>
                     {blogDetail.content}
                    </p>
                  </section>
                  </div>
            
           
            {/* CARD ENDS */}
            {/* Other blog cards go here... */}

            {blogLatest.map((card) => (
                
             
            <div className="blog_card">
              <Link to="/article" className="figure" key={card.id}>
                <LazyLoadImage
                  src={`https://ved.venturingdigitally.com/assets/img/blog/${card.image}`}
                  alt=""
                  loading="lazy"
                  className="bloges-card-img-img w-100 h-100"
                />
                <span className="tag">{card.tag}</span>
              </Link>
              <section>
                <Link to="#" className="title">
                {card.blog_title}
                </Link>
                <p>{card.content}</p>
              </section>
            </div>
            ))}

          </div>

          <div className="blog_content right_content">
            {/* SEARCH COLUMN ENDS */}

            <div className="columns posts">
              <span className="title">
                Recent Posts{" "}
                <Link to="#" title="Explore More">
                  <i className="fa fa-share"></i>
                </Link>
              </span>
              <section>
               
                {blogPost.map((card) => (
                <Link to="#" key={card.id}>
                
                    <LazyLoadImage
                      src={`https://ved.venturingdigitally.com/assets/img/blog/${card.image}`}
                      alt={card.blog_title}
                      loading="lazy"
                      className="bloges-card-img-img w-10 h-20"
                      style={{width:"60px"}}
                    />
                      <p>{card.content}</p>
                
                </Link>
              ))}
              </section>
            </div>
            <div className="columns comments">
              <span className="title">
                {" "}
                Recent Trends{" "}
                <Link to="#" title="Explore More">
                  <i className="fa fa-share"></i>
                </Link>
              </span>
              <section>
                <marquee
                  direction="up"
                  scrollAmount="4"
                  onMouseOver={(e) => e.target.stop()}
                  onMouseOut={(e) => e.target.start()}
                  className="marquee2"
                >
                   {blogtrends.map((card) => (
               
                      <p>{card.content}</p>
                
              
                   ))}
                
                </marquee>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
