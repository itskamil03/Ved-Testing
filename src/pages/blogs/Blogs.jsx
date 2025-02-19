import "./Blogs.css";
import BlogsHero from "../../components/blogs_components/BlogsHero";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <section id="bloges-container">
        <div className="container-fluid">
          <div className="container">
            <div className="blogesc-main">
              {blogs.map((card) => (
                <Link className="bloges-card" key={card.id}>
                  <div className="bloges-card-img">
                    <LazyLoadImage
                      src={`https://ved.venturingdigitally.com/assets/img/blog/${card.image}`}
                      alt={card.blog_title}
                      className="bloges-card-img-img w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="blogs-card-title">
                    <div className="bloges-card-time">{card.blog_title}</div>
                    <div className="bloges-card-heading">{card.category}</div>
                    <div           
                      className="name-block"
                      dangerouslySetInnerHTML={{ __html: card.content.replace(/<p><br\s?\/?><\/p>|<h[1-6]><br\s?\/?><\/h[1-6]>/g, '') }}
                    ></div>
                    <Link to="/BlogDetails" onClick={()=>handleBlog(card.id)} className="read-more-button">
                      Read More
                    </Link>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default Blogs;
