import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import parse from "html-react-parser"; // <-- Added the parser here
import "./BlogDetails.css";
import BlogDetailsHero from "../../components/BlogDetails_components/BlogDetailsHero";
import { LazyLoadImage } from "react-lazy-load-image-component";

const getBlogImages = (blog) => {
  const rawImages = blog?.images ?? blog?.image;
  let urls = [];

  if (Array.isArray(rawImages) && rawImages.length > 0) {
    urls = rawImages
      .map((u) => (typeof u === "string" ? u.trim() : String(u)))
      .filter((u) => u && u.startsWith("http"));
  } else if (typeof rawImages === "string" && rawImages.trim()) {
    const s = rawImages.trim();

    if (s.startsWith("[")) {
      try {
        const parsed = JSON.parse(s);
        urls = Array.isArray(parsed)
          ? parsed.map((u) => String(u).trim()).filter((u) => u && u.startsWith("http"))
          : [];
      } catch {
        urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
      }
    } else {
      urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
      if (urls.length === 0 && s.startsWith("http")) urls = [s];
    }
  }

  if (urls.length === 0 && typeof blog?.image === "string" && blog.image.trim().startsWith("http")) {
    urls = [blog.image.trim()];
  }

  return urls;
};

function BlogDetails() {
  const [blogDetail, setBlogDetails] = useState([]);
  const [blogLatest, setBlogLatest] = useState([]);
  const [blogtrends, setBlogTrends] = useState([]);
  const [blogPost, setBlogPost] = useState([]);
  const Navigate = useNavigate();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (loading) {
      const BlogId = localStorage.getItem("blogId");

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
          setBlogLatest(resp.latest_two_data);
          setBlogTrends(resp.recent_trends);
          setBlogPost(resp.recent_posts);
          setloading(false);
        });
    }
  }, [loading]);

  const decodeHtmlEntities = (html) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerHTML;
  };

  const getContentExcerpt = (html) => {
    const doc = new DOMParser().parseFromString(html || "", "text/html");
    const text = doc.body.textContent || "";
    return text.trim();
  };

  const filterOutHeadingsAndParagraphs = (html) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    // Remove only the first h3 and first h4 tags (just below the image)
    const firstH3 = doc.querySelector("h3");
    const firstH4 = doc.querySelector("h4");
    if (firstH3) firstH3.remove();
    if (firstH4) firstH4.remove();
    return doc.body.innerHTML;
  };

  const handleClick = (blogId) => {
    localStorage.setItem("blogId", blogId);
    setloading(true);
  };

  const handleTrendsClick = (blogId, blogTitle) => {
    Navigate(`/BlogDetails/${blogTitle}`);
    localStorage.setItem("blogId", blogId);
    setloading(true);
  };

  return (
    <div>
      {!loading && (
        <>
          <BlogDetailsHero />

          {/* BLOG SECTION */}
          <div className="blog_container">
            <div className="blog_content" style={{ width: "100%" }}>
              <div className="left_content">
                <div className="blog_card blog_card_detail">
                  <div className="blog_card_top">
                    <Link to="/article" className="figure blog_card_figure" key={blogDetail.id}>
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src={getBlogImages(blogDetail)[0] || ""}
                        alt={blogDetail.blog_title}
                        className="bloges-card-img-img w-100 h-100"
                      />
                      <span className="tag ">{blogDetail.tag}</span>
                    </Link>

                    <div className="blog_card_summary">
                      <Link to="#" className="title">
                        {blogDetail.blog_title}
                      </Link>

                      <div className="blog_card_meta">
                        <span>{blogDetail.category}</span>
                      </div>

                      <p className="blog_card_excerpt">
                        {/* Get safe text excerpt, split to 40 words */}
                        {getContentExcerpt(blogDetail.content).split(/\s+/).slice(0, 40).join(" ")}...
                      </p>
                    </div>
                  </div>

                  <div className="blog_card_body">
                    {/* 👇 Updated to use html-react-parser instead of dangerouslySetInnerHTML 👇 */}
                    <div style={{ fontSize: "13px" }}>
                      {blogDetail.content ? parse(filterOutHeadingsAndParagraphs(blogDetail.content)) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog_content right_content">
                <div className="columns posts">
                  <span className="title">
                    Recent Posts{" "}
                    <Link to="#" title="Explore More">
                      <i className="fa fa-share"></i>
                    </Link>
                  </span>
                  <section className="recentPosts">
                    {blogPost.map((card) => (
                      <Link to={`/BlogDetails/${card.blog_title}`} onClick={() => handleClick(card.id)} key={card.id}>
                        {(() => {
                          const postImages = getBlogImages(card);
                          const postImageSrc = postImages.length > 0 ? postImages[0] : "";

                          return (
                            <img
                              loading="eager"
                              fetchpriority="high"
                              src={postImageSrc}
                              alt={card.blog_title}
                              className="bloges-card-img-img w-10 h-20"
                              style={{ width: "60px" }}
                            />
                          );
                        })()}

                        {/* 👇 Updated to safely render text without dangerouslySetInnerHTML 👇 */}
                        <div style={{ fontSize: "12px" }}>
                          {getContentExcerpt(card.content).split(" ").slice(0, 20).join(" ")}...
                        </div>
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
                        /* 👇 Updated to safely render text without dangerouslySetInnerHTML 👇 */
                        <div
                          key={card.id}
                          style={{ fontSize: "12px", cursor: "pointer", marginBottom: "15px" }}
                          onClick={() => handleTrendsClick(card.id, card.blog_title)}
                        >
                          {getContentExcerpt(card.content).split(" ").slice(0, 20).join(" ")}...
                        </div>
                      ))}
                    </marquee>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BlogDetails;