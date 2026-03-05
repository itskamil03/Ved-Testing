import "./Blogs.css";
import BlogsHero from "../../components/blogs_components/BlogsHero";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogImageCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  adaptiveHeight: true,
};

const getBlogImages = (blog) => {
  const rawImages = blog?.images ?? blog?.image;
  let urls = [];
  if (Array.isArray(rawImages) && rawImages.length > 0) {
    urls = rawImages.map((u) => (typeof u === "string" ? u.trim() : String(u))).filter((u) => u && u.startsWith("http"));
  } else if (typeof rawImages === "string" && rawImages.trim()) {
    const s = rawImages.trim();
    if (s.startsWith("[")) {
      try {
        const parsed = JSON.parse(s);
        urls = Array.isArray(parsed) ? parsed.map((u) => String(u).trim()).filter((u) => u && u.startsWith("http")) : [];
      } catch {
        urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
      }
    } else {
      urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
      if (urls.length === 0 && s.startsWith("http")) urls = [s];
    }
  }
  if (urls.length === 0 && blog?.image && typeof blog.image === "string" && blog.image.trim().startsWith("http")) {
    urls = [blog.image.trim()];
  }
  return urls;
};

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://ved.venturingdigitally.com/api/show_blog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((resp) => {
        setBlogs(resp.data);

      });
  }, []);

  const handleBlog=(blogId)=>
  {
     localStorage.setItem("blogId",blogId)
  }

  

  return (
    <>
      <BlogsHero />
           
      <section id="lifeatvedfirst">
        <div className="container-fluid">
          <div className="container">
            <div className="lifeatvedfirst-section-head" style={{marginBottom:"0px"}}>
              <div className="lifeatvedfirst-custom-head">
                <div className="lifeatvedfirst-head-title">
                  Our Latest Blog || Venturing digitally.
                </div>
              </div>

              <div className="lifeatvedfirst-head-slogan">
              Venturing Digitally Pvt Ltd - Empowering Tomorrow's Digital Innovators keep update with out latest blogs.
              </div>
            </div>
            </div>
            </div>
            </section>

      <section id="bloges-container">
        <div className="container-fluid">
          <div className="container">
            <div className="blogesc-main">
              {blogs.map((card) => {
                const blogImages = getBlogImages(card);
                const singleSrc = blogImages.length > 0 ? blogImages[0] : "";
                return (
                <Link className="bloges-card" key={card.id} to={`/BlogDetails/${card.blog_title}`} onClick={() => handleBlog(card.id)}>
                  <div className="bloges-card-img events-card-img">
                    {blogImages.length > 1 ? (
                      <div className="events-card-carousel">
                        <Slider {...blogImageCarouselSettings}>
                          {blogImages.map((imgUrl, i) => (
                            <div key={i} className="events-card-carousel-slide">
                              <img
                                loading="eager"
                                fetchPriority="high"
                                src={typeof imgUrl === "string" ? imgUrl : ""}
                                alt={`${card.blog_title} ${i + 1}`}
                                className="bloges-card-img-img w-100 h-100"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    ) : singleSrc ? (
                      <img
                        loading="eager"
                        fetchPriority="high"
                        src={singleSrc}
                        alt={card.blog_title}
                        className="bloges-card-img-img w-100 h-100"
                      />
                    ) : null}
                  </div>
                  <div className="blogs-card-title">
                    <div className="bloges-card-time">{card.blog_title}</div>
                    <div className="bloges-card-heading">{card.category}</div>
                    <div           
                      className="name-block"
                      dangerouslySetInnerHTML={{ __html: card.content.replace(/<p><br\s?\/?><\/p>|<h[1-6]><br\s?\/?><\/h[1-6]>/g, '') }}
                    ></div>
                    <span className="read-more-button">
                      Read More
                    </span>
                  </div>
                </Link>
              ); })}
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default Blogs;
