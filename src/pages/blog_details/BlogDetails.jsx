import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./BlogDetails.css";
import BlogDetailsHero from "../../components/BlogDetails_components/BlogDetailsHero";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";


function BlogDetails() {

  const [blogDetail, setBlogDetails] = useState([]);

  const [blogLatest, setBlogLatest] = useState([]);
  const [blogtrends, setBlogTrends] = useState([]);
  const [blogPost, setBlogPost] = useState([]);

  const Navigate = useNavigate()

  const [loading, setloading] = useState(true)

  useEffect(() => {
    if(loading)
    {
      const BlogId=localStorage.getItem("blogId")

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
        setloading(false)
      });
    }
  }, [loading]);

  const decodeHtmlEntities = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerHTML;
  };

  const handleClick = (blogId) => {
 
    localStorage.setItem("blogId",blogId)
      setloading(true)
  }

  const handleTrendsClick=(blogId, blogTitle)=> {
   
    Navigate(`/BlogDetails/${blogTitle}`)
    localStorage.setItem("blogId",blogId)
    setloading(true)

  }
  

  return (
    <div>
      {!loading && <>
      <BlogDetailsHero />

      {/* BLOG SECTION */}
      <div className="blog_container">
        <div className="blog_content" style={{width:"100%"}}>
          <div className="left_content">
         
                  <div className="blog_card">
                  <Link to="/article" className="figure" key={blogDetail.id}>
                    <LazyLoadImage
                    src={`${blogDetail.image}`}
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

                    <div style={{fontSize:"13px"}}
                     dangerouslySetInnerHTML={{
                    __html: decodeHtmlEntities(blogDetail.content)
                }}
              />

                  </section>
                  </div>
            
           
       

            {/* {blogLatest.map((card) => (
                
             
            <div className="blog_card">
              <Link to="/article" className="figure" key={card.id}>
                <LazyLoadImage
                  src={`${card.image}`}
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
                <div style={{fontSize:"13px"}}
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(blogDetail.content)
                }}
              />
              </section>
            </div>
            ))} */}

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
              <section className="recentPosts">
               
                {blogPost.map((card) => (
                <Link to={`/BlogDetails/${card.blog_title}`} onClick={()=>handleClick(card.id)} key={card.id}>
                
                    <LazyLoadImage
                      src={`${card.image}`}
                      alt={card.blog_title}
                      loading="lazy"
                      className="bloges-card-img-img w-10 h-20"
                      style={{width:"60px"}}
                    />    
                         
                           <div style={{fontSize:"12px"}}
                      dangerouslySetInnerHTML={{
                        __html: decodeHtmlEntities(card.content)
                          .split(" ")
                          .slice(0, 20)
                          .join(" ") + "..."
                      }}
                    />
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
                  height="200px"
                  
                >
                   {blogtrends.map((card) => (
               
               <div style={{fontSize:"12px"}} onClick={()=>handleTrendsClick(card.id, card.blog_title)}
               dangerouslySetInnerHTML={{
                 __html: decodeHtmlEntities(card.content)
                   .split(" ")
                   .slice(0, 20)
                   .join(" ") + "..."
               }}
             />
                
              
                   ))}
                
                </marquee>
              </section>
            </div>
          </div>
        </div>
      </div>
      </>
}
    </div>
  );
}

export default BlogDetails;
